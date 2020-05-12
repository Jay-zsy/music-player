import React from "react";
import { getPlaylistContext } from "../../helperFn/helperFn";
import styles from "./PlaylistsTab.module.scss";

export default function PlaylistsTab({
  playlists,
  setCurrentPlaylistContext,
  setCurrentPage,
}) {
  return (
    <ul className={styles.playlistTab}>
      {playlists.map((playlist) => {
        return (
          <li
            className={styles.playlist}
            key={playlist.id}
            onClick={() => {
              getPlaylistContext(
                playlist.id,
                setCurrentPlaylistContext,
                playlists
              );
              setCurrentPage("Playlist");
            }}
          >
            <div className={styles.title}>{playlist.name}</div>
          </li>
        );
      })}
    </ul>
  );
}
