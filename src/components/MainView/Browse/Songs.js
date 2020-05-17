import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {
  getArtistsNames,
  msToTime,
  playParticularTrack,
} from "../../../helperFn/helperFn";
import styles from "./Songs.module.scss";
export default function Songs({ songs, play, pause, currentPlayback }) {
  return (
    <ol>
      {songs.map((song) => {
        return (
          <li key={song.id}>
            <div className={styles.left}>
              {currentPlayback?.track_window?.current_track.id === song.id ? (
                currentPlayback.paused ? (
                  <PlayArrowIcon className={styles.playActive} onClick={play} />
                ) : (
                  <PauseIcon className={styles.pauseActive} onClick={pause} />
                )
              ) : (
                <PlayArrowIcon
                  className={styles.play}
                  onClick={() => playParticularTrack(song.uri)}
                />
              )}
              <MusicNoteIcon className={styles.note} />
            </div>
            <div className={styles.trackInfo}>
              <div
                className={
                  currentPlayback?.track_window?.current_track.id === song.id
                    ? styles.trackNameActive
                    : styles.trackName
                }
              >
                {song.name}
              </div>
              <div className={styles.bot}>
                <div className={styles.trackArtists}>
                  {getArtistsNames(song.artists)}
                </div>
                <div className={styles.separator}>•</div>
                <div className={styles.trackAlbum}>{song.album.name}</div>
              </div>
            </div>
            <div
              className={
                currentPlayback?.track_window?.current_track.id === song.id
                  ? styles.rightActive
                  : styles.right
              }
            >
              {msToTime(song.duration_ms)}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
