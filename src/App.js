import React, { useState, useEffect } from "react";
import styles from "./MusicApp.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import MainView from "./components/MainView/MainView";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import { getCookie, cycleRepeat } from "./helperFn/helperFn";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export default function MusicApp() {
  const [spotifyToken, setSpotifyToken] = useState(
    getCookie("spotify_access_token") || null
  );
  const [geniusToken, setGeniusToken] = useState(
    getCookie("genius_access_token") || null
  );
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentTab, setCurrentTab] = useState("Playlists");
  const [user, setUser] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [currentPlayback, setCurrentPlayback] = useState({});
  const [recentTracks, setRecentTracks] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState({});
  const [podcasts, setPodcasts] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [savedAlbums, setSavedAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [savedTracks, setSavedTracks] = useState({});
  const [currentPlaylistContext, setCurrentPlaylistContext] = useState({});
  const [liked, setLiked] = useState([]);
  const [categories, setCategories] = useState({});
  const [volume, setVolume] = useState({ current: 100, prev: 0 });

  const transferPlayback = (deviceID) => {
    spotifyApi
      .transferMyPlayback([deviceID], {
        play: false,
      })
      .then(console.log())
      .catch(console.log());
  };

  const refreshToken = () => {
    return axios
      .get("/refresh_token", { withCredentials: true })
      .then((res) => console.log(res));
  };

  const skipToNext = async () => {
    try {
      const response = await spotifyApi.skipToNext();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const skipToPrevious = async () => {
    try {
      const response = await spotifyApi.skipToPrevious();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const play = async () => {
    try {
      await spotifyApi.play();
      console.log("played");
      setCurrentPlayback((prevState) => {
        return { ...prevState, paused: false };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const pause = async () => {
    try {
      await spotifyApi.pause();
      console.log("paused");
      setCurrentPlayback((prevState) => {
        return { ...prevState, paused: true };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleShuffle = async () => {
    try {
      const shuffleState = currentPlayback.shuffle;
      await spotifyApi.setShuffle(!shuffleState);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleRepeat = async () => {
    try {
      const newRepeatState = cycleRepeat(currentPlayback.repeat_mode);
      await spotifyApi.setRepeat(newRepeatState);
    } catch (err) {
      console.log(err);
    }
  };

  // toggle volume
  const toggleVolume = async (volume) => {
    try {
      if (volume.current) {
        setVolume((prevState) => {
          spotifyApi.setVolume(0);
          return { current: 0, prev: prevState.current };
        });
      } else {
        setVolume((prevState) => {
          spotifyApi.setVolume(prevState.prev);
          return { current: prevState.prev, prev: 0 };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // update volume
  const updateVolume = async (e) => {
    const currentPosition = e.nativeEvent.offsetX;
    const totalWidth = e.nativeEvent.target.offsetWidth;
    const volume = Math.floor((currentPosition / totalWidth) * 100);
    setVolume((prevState) => {
      spotifyApi.setVolume(volume);
      return { current: volume, prev: prevState.current };
    });
  };

  //Get more tracks
  const loadMoreTracks = async () => {
    try {
      const nextOffset = savedTracks.offset + 50;
      const limit = 50;
      const { items, total, offset } = await spotifyApi.getMySavedTracks({
        limit,
        offset: nextOffset,
      });
      setSavedTracks((prevState) => {
        return {
          myTracks: [...prevState.myTracks, ...items],
          total,
          offset,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (spotifyToken) {
      spotifyApi.setAccessToken(spotifyToken);
      window.onSpotifyWebPlaybackSDKReady = () => {
        const webPlayback = new window.Spotify.Player({
          name: "Jay's Music Player - Web SDK",
          getOAuthToken: (callback) => {
            callback(spotifyToken);
          },
        });
        // SDK Error handling
        webPlayback.addListener("initialization_error", ({ message }) => {
          console.error("Initialization Error:", message);
          refreshToken()
            .then(setSpotifyToken(getCookie("spotify_access_token")))
            .catch(console.log);
        });
        webPlayback.addListener("authentication_error", ({ message }) => {
          console.error("Authentication Error(401):", message);
          refreshToken()
            .then(setSpotifyToken(getCookie("spotify_access_token")))
            .catch(console.log);
        });
        webPlayback.addListener("account_error", ({ message }) => {
          console.error("Account Error(Wrong account type):", message);
        });
        webPlayback.addListener("playback_error", ({ message }) => {
          console.error("Playback Error:", message);
          refreshToken()
            .then(setSpotifyToken(getCookie("spotify_access_token")))
            .catch(console.log);
        });
        // SDK Playback status updates
        webPlayback.addListener("player_state_changed", (state) => {
          //getting the user's current playback state
          const {
            duration,
            paused,
            track_window,
            position,
            repeat_mode,
            shuffle,
            timestamp,
          } = state;
          setCurrentPlayback({
            duration,
            paused,
            track_window,
            position,
            repeat_mode,
            shuffle,
            timestamp,
          });

          //getting liked status
          const getLikedStatus = async () => {
            try {
              const likedStatus = await spotifyApi.containsMySavedTracks([
                track_window?.current_track?.id,
              ]);
              setLiked(likedStatus);
            } catch (err) {
              console.log(err);
            }
          };
          getLikedStatus();

          webPlayback.getVolume().then((volume) => {
            let volume_percentage = volume * 100;
            console.log(`The volume of the player is ${volume_percentage}%`);
            setVolume((prevState) => {
              return { ...prevState, current: Math.floor(volume_percentage) };
            });
          });
        });
        // SDK on ready
        webPlayback.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID", device_id);
          (async () => {
            try {
              //transfer playback
              transferPlayback(device_id);
              //getting the user meta data
              const {
                display_name,
                email,
                id,
                images,
                product,
              } = await spotifyApi.getMe();
              setUser({
                display_name,
                email,
                id,
                profile: images[0],
                product,
              });
              //getting the user's playlists
              const playlistResponse = await spotifyApi.getUserPlaylists(
                user.id
              );
              setPlaylists(playlistResponse.items);

              //getting the user's recently played tracks
              const { items } = await spotifyApi.getMyRecentlyPlayedTracks();
              setRecentTracks(items);

              //getting user's saved shows
              const { items: shows } = await spotifyApi.getMySavedShows();
              setPodcasts(shows);

              //getting new releases
              const { albums } = await spotifyApi.getNewReleases({
                country: "US",
                limit: 20,
              });
              setNewReleases(albums.items);

              //getting featured playlists
              const nowISO = new Date();
              const featured = await spotifyApi.getFeaturedPlaylists({
                country: "US",
                limit: 20,
                timestamp: nowISO.toISOString(),
              });
              setFeaturedPlaylists(featured);

              //getting user's favourite artists
              const {
                items: favouriteArtists,
              } = await spotifyApi.getMyTopArtists({ limit: 50 });
              setTopArtists(favouriteArtists);

              //getting user's saved albums
              const { items: myAlbums } = await spotifyApi.getMySavedAlbums({
                limit: 50,
              });
              setSavedAlbums(myAlbums);

              //getting user's favourite tracks
              const {
                items: favouriteTracks,
              } = await spotifyApi.getMyTopTracks();
              setTopTracks(favouriteTracks);

              //getting user's first 50 saved tracks
              const {
                items: myTracks,
                total,
                offset,
              } = await spotifyApi.getMySavedTracks({ limit: 50 });
              setSavedTracks({ myTracks, total, offset });

              //getting first 50 categories
              const { categories } = await spotifyApi.getCategories({
                country: "US",
                limit: 50,
              });

              setCategories(categories);
            } catch (err) {
              console.log("There was an error getting my info!");
            }
          })();
        });
        webPlayback.connect();
      };
    }
  }, [spotifyToken, user.id]);

  return (
    <div className={styles.musicApp}>
      <Topbar
        profile={user?.profile?.url}
        currentPage={currentPage}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      <Sidebar
        username={user.display_name}
        email={user.email}
        profile={user?.profile?.url}
        playlists={playlists}
        product={user.product}
        setCurrentPlaylistContext={setCurrentPlaylistContext}
        setCurrentPage={setCurrentPage}
      />
      <MainView
        currentPage={currentPage}
        currentTab={currentTab}
        name={user.display_name}
        profile={user?.profile?.url}
        recentTracks={recentTracks}
        newReleases={newReleases}
        featuredPlaylists={featuredPlaylists}
        podcasts={podcasts}
        topArtists={topArtists}
        savedAlbums={savedAlbums}
        topTracks={topTracks}
        play={play}
        pause={pause}
        currentPlayback={currentPlayback}
        savedTracks={savedTracks}
        currentPlaylistContext={currentPlaylistContext}
        playlists={playlists}
        categories={categories}
      />
      <NowPlaying
        currentPlayback={currentPlayback}
        setCurrentPlayback={setCurrentPlayback}
        skipToNext={skipToNext}
        skipToPrevious={skipToPrevious}
        play={play}
        pause={pause}
        toggleShuffle={toggleShuffle}
        toggleRepeat={toggleRepeat}
        loadMoreTracks={loadMoreTracks}
        refreshToken={refreshToken}
        liked={liked}
        setLiked={setLiked}
        volume={volume}
        toggleVolume={toggleVolume}
        updateVolume={updateVolume}
      />
    </div>
  );
}
