import React from "react";
import Header from "./Header";
import Divider from "./Divider";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {
  getArtistsNames,
  msToTime,
  playTrackWindow,
} from "../../../helperFn/helperFn";
import styles from "./LikedSongs.module.scss";

export default function LikedSongs({
  name,
  profile,
  play,
  pause,
  currentPlayback,
  savedTracks,
}) {
  return (
    <div className={styles.container}>
      <Header name={name} profile={profile} savedTracks={savedTracks} />
      <Divider play={play} pause={pause} currentPlayback={currentPlayback} />
      <div className={styles.content}>
        <section>
          <ol>
            {savedTracks?.myTracks?.map((track) => {
              return (
                <li key={track.track.id}>
                  <div className={styles.left}>
                    {currentPlayback?.track_window?.current_track.id ===
                    track.track.id ? (
                      currentPlayback.paused ? (
                        <PlayArrowIcon
                          className={styles.playActive}
                          onClick={play}
                        />
                      ) : (
                        <PauseIcon
                          className={styles.pauseActive}
                          onClick={pause}
                        />
                      )
                    ) : (
                      <PlayArrowIcon
                        className={styles.play}
                        onClick={() =>
                          playTrackWindow(track.track.id, savedTracks.myTracks)
                        }
                      />
                    )}
                    <MusicNoteIcon className={styles.note} />
                  </div>
                  <div className={styles.trackInfo}>
                    <div
                      className={
                        currentPlayback?.track_window?.current_track.id ===
                        track.track.id
                          ? styles.trackNameActive
                          : styles.trackName
                      }
                    >
                      {track.track.name}
                    </div>
                    <div className={styles.bot}>
                      <div className={styles.trackArtists}>
                        {getArtistsNames(track.track.artists)}
                      </div>
                      <div className={styles.separator}>•</div>
                      <div className={styles.trackAlbum}>
                        {track.track.album.name}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      currentPlayback?.track_window?.current_track.id ===
                      track.track.id
                        ? styles.rightActive
                        : styles.right
                    }
                  >
                    {msToTime(track.track.duration_ms)}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </div>
  );
}
