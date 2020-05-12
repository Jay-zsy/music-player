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
import styles from "./Playlist.module.scss";

export default function Playlist({
  name,
  profile,
  play,
  pause,
  currentPlayback,
  currentPlaylistContext,
}) {
  return (
    <div className={styles.container}>
      <Header
        name={currentPlaylistContext?.currentPlaylist?.owner?.display_name}
        cover={currentPlaylistContext?.currentPlaylist?.images[0].url}
        title={currentPlaylistContext?.currentPlaylist?.name}
        tracks={currentPlaylistContext?.currentPlaylistTracks?.items}
        total={currentPlaylistContext?.currentPlaylistTracks?.total}
      />
      <Divider play={play} pause={pause} currentPlayback={currentPlayback} />
      <div className={styles.content}>
        <section>
          <ol>
            {currentPlaylistContext?.currentPlaylistTracks?.items?.map(
              (track) => {
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
                            playTrackWindow(
                              track.track.id,
                              currentPlaylistContext?.currentPlaylistTracks
                                ?.items
                            )
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
              }
            )}
          </ol>
        </section>
      </div>
    </div>
  );
}
