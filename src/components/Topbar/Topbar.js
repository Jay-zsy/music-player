import React from "react";
import UserIcon from "./UserIcon";
import Context from "./Context";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import styles from "./Topbar.module.scss";

export default function Topbar({
  currentPage,
  profile,
  setCurrentTab,
  currentTab,
  scrollPast,
  currentPlayback,
  currentPlaylistContext,
  play,
  pause,
  query,
  setQuery,
  handleOnChangeQuery,
}) {
  return (
    <div className={styles.topbar}>
      <div className={styles.navWrapper}>
        {currentPage === "Browse" && (
          <Searchbar
            query={query}
            handleOnChangeQuery={handleOnChangeQuery}
            setQuery={setQuery}
          />
        )}

        {currentPage === "Collection" && (
          <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        )}

        {scrollPast && currentPage === "Liked" && (
          <Context
            context="Liked Songs"
            paused={currentPlayback?.paused}
            play={play}
            pause={pause}
          />
        )}
        {scrollPast && currentPage === "Playlist" && (
          <Context
            context={currentPlaylistContext}
            paused={currentPlayback?.paused}
            play={play}
            pause={pause}
          />
        )}
      </div>
      <UserIcon profile={profile} />
    </div>
  );
}
