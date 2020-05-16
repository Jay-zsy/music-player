import React from "react";
import DateTime from "./DateTime";
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
}) {
  return (
    <div className={styles.topbar}>
      <div className={styles.navWrapper}>
        {currentPage === "Browse" && <Searchbar />}

        {currentPage === "Collection" && (
          <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        )}
      </div>
      <div className={styles.contextWrapper}>
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
      <DateTime />
      <UserIcon profile={profile} />
    </div>
  );
}
