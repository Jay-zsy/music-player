import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

//convert milli to time format
export const msToTime = (duration, summary) => {
  let milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days = Math.floor(duration / (1000 * 60 * 60 * 24));
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (days >= 1) {
    return days * 24 + Number(hours) + " hr " + minutes + " min";
  }
  if (minutes[0] === "0" && hours === "00") {
    return minutes[1] + ":" + seconds;
  }
  if (hours === "00") {
    if (summary) {
      return minutes + " min " + seconds + " sec";
    } else {
      return minutes + ":" + seconds;
    }
  }
  if (hours[0] === "0") {
    return hours[1] + " hr " + minutes + " min ";
  } else {
    return hours + " hr " + minutes + " min ";
  }
};
//get cookie value by name
export const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};
//get the next query returns object format
export const hashHash = (queryString) => {
  let rgx = /\?(.*)/;
  let arr = queryString
    .match(rgx)[1]
    .split("=")
    .join()
    .split("&")
    .join()
    .split(",");
  const params = {};
  for (let i = 0; i < arr.length; i += 2) {
    params[arr[i]] = arr[i + 1];
  }
  return params;
};
//get all artists names
export const getArtistsNames = (artistsArray) => {
  if (artistsArray) {
    let artists = artistsArray[0].name;
    for (let i = 1; i < artistsArray.length; i++) {
      artists += `, ${artistsArray[i].name}`;
    }
    return artists;
  }
  return null;
};
//cycle repeat state
export const cycleRepeat = (repeatState) => {
  console.log(repeatState);
  if (repeatState === 0) {
    return "context";
  }
  if (repeatState === 1) {
    return "track";
  }
  if (repeatState === 2) {
    return "off";
  }
};
//make button style
export const buttonStyle = (state) => {
  if (state === "active") {
    return { color: "#2ab859", fontSize: "16px" };
  }
  if (state === "inactive") {
    return { fontSize: "16px" };
  }
};
//filter out recently played duplicates
export const filterDuplicates = (recentlyPlayed) => {
  let uniqueTracks = {};
  return recentlyPlayed.filter((context) => {
    if (!uniqueTracks[context.track.id]) {
      uniqueTracks[context.track.id] = true;
      return context;
    } else {
      return false;
    }
  });
};
//toggle mute volume
export const toggleMute = () => {
  console.log("muted noob");
};
//calculate total playtime
export const calculatePlaytime = (tracksArr, summary) => {
  if (!tracksArr) {
    return null;
  }
  let totalTime = 0;
  for (let i = 0; i < tracksArr.length; i++) {
    totalTime += tracksArr[i].track.duration_ms;
  }
  return msToTime(totalTime, summary);
};
//fisher yates shuffle
export const fyShuffle = (tracksArr) => {};
//play from this index
export const playTrackWindow = async (trackID, savedTracksArr) => {
  let offset,
    urisArr = [];

  for (let i = 0; i < savedTracksArr.length; i++) {
    if (savedTracksArr[i].track.id === trackID) {
      offset = i;
    }
  }
  //later need to check the size of the incoming array
  for (let i = 0; i < savedTracksArr.length; i++) {
    urisArr[i] = savedTracksArr[i].track.uri;
  }

  // if(urisArr.length > 200) {
  // if(offset <= 200){}
  // if(offset > 200) {}
  // }

  try {
    await spotifyApi.play({
      uris: urisArr,
      offset: { position: offset },
    });
  } catch (err) {
    console.log(err);
  }
};
//get tracks in playlist and link
export const getPlaylistContext = async (
  playlistID,
  setCurrentPlaylistContext,
  playlists
) => {
  let currentPlaylist;
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].id === playlistID) {
      currentPlaylist = playlists[i];
    }
  }
  const currentPlaylistTracks = await spotifyApi.getPlaylistTracks(playlistID);
  setCurrentPlaylistContext({
    currentPlaylist,
    currentPlaylistTracks,
  });
};
//add track to liked/library
export const likeTrack = async (trackID) => {
  try {
    const res = await spotifyApi.addToMySavedTracks([trackID]);
    console.log("Added", res);
  } catch (err) {
    console.log(err);
  }
};
//remove track from liked/library
export const unlikeTrack = async (trackID) => {
  try {
    const res = await spotifyApi.removeFromMySavedTracks([trackID]);
    console.log("Removed", res);
  } catch (err) {
    console.log(err);
  }
};
