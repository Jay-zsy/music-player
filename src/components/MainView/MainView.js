import React from "react";
import RecentlyPlayed from "./Home/RecentlyPlayed";
import PopularNewReleases from "./Home/PopularNewReleases";
import FeaturedPlaylists from "./Home/FeaturedPlaylists";
import PodCasts from "./Home/PodCasts";
import LikedSongs from "./LikedSongs/LikedSongs";
import Playlist from "./Playlists/Playlist";
import Library from "./Library/Library";
import Browse from "./Browse/Browse";
import styles from "./MainView.module.scss";

export default function MainView({
  currentPage,
  currentTab,
  name,
  profile,
  recentTracks,
  newReleases,
  featuredPlaylists,
  podcasts,
  play,
  pause,
  currentPlayback,
  savedTracks,
  currentPlaylistContext,
  playlists,
  topArtists,
  savedAlbums,
  categories,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.viewNode}>
        <div className={styles.space}></div>

        {currentPage === "Home" && (
          <section className={styles.wrapper}>
            <RecentlyPlayed recentTracks={recentTracks} />
            <PodCasts podcasts={podcasts} />
            <PopularNewReleases newReleases={newReleases} />
            <FeaturedPlaylists
              message={featuredPlaylists.message}
              featuredPlaylists={featuredPlaylists.playlists}
            />
          </section>
        )}

        {currentPage === "Browse" && (
          <section className={styles.wrapper}>
            <Browse categories={categories} />
          </section>
        )}

        {currentPage === "Collection" && (
          <section className={styles.wrapper}>
            <Library
              currentTab={currentTab}
              playlists={playlists}
              podcasts={podcasts}
              topArtists={topArtists}
              savedAlbums={savedAlbums}
            />
          </section>
        )}

        {currentPage === "Liked" && (
          <LikedSongs
            name={name}
            profile={profile}
            play={play}
            pause={pause}
            currentPlayback={currentPlayback}
            savedTracks={savedTracks}
          />
        )}

        {currentPage === "Playlist" && (
          <Playlist
            currentPlaylistContext={currentPlaylistContext}
            currentPlayback={currentPlayback}
          />
        )}
      </div>
    </div>
  );
}
