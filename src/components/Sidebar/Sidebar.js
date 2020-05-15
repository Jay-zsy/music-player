import React from "react";
import UserProfile from "./UserProfile";
import MenuTab from "./MenuTab";
import PlaylistsTab from "./PlaylistsTab";
import TrackImage from "./TrackImage";
import styles from "./Sidebar.module.scss";

export default function Sidebar({
  username,
  email,
  profile,
  playlists,
  product,
  setCurrentPlaylistContext,
  setCurrentPage,
  expandedView,
  setExpandedView,
  currentPlayback,
}) {
  return (
    <div className={styles.sidebar}>
      <UserProfile
        username={username}
        email={email}
        profile={profile}
        product={product}
      />
      <MenuTab setCurrentPage={setCurrentPage} />
      <hr className={styles.divider}></hr>
      <PlaylistsTab
        playlists={playlists}
        setCurrentPlaylistContext={setCurrentPlaylistContext}
        setCurrentPage={setCurrentPage}
      />
      <TrackImage
        expandedView={expandedView}
        setExpandedView={setExpandedView}
        cover={
          currentPlayback?.track_window?.current_track?.album?.images[0].url
        }
        name={currentPlayback?.track_window?.current_track?.name}
      />
    </div>
  );
}
