import React from "react";
import styles from "./NowPlaying.module.scss";
import PlayerControls from "./PlayerControls";
import PlayingBarLeft from "./PlayingBarLeft";
import PlayingBarRight from "./PlayingBarRight";
export default function NowPlaying({
  currentPlayback,
  skipToNext,
  skipToPrevious,
  play,
  pause,
  toggleShuffle,
  toggleRepeat,
  loadMoreTracks,
  refreshToken,
  liked,
}) {
  return (
    <div className={styles.playingContainer}>
      {currentPlayback.track_window?.current_track ? (
        <PlayingBarLeft currentPlayback={currentPlayback} liked={liked} />
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <PlayerControls
        skipToNext={skipToNext}
        skipToPrevious={skipToPrevious}
        play={play}
        currentPlayback={currentPlayback}
        pause={pause}
        toggleShuffle={toggleShuffle}
        toggleRepeat={toggleRepeat}
      />
      <PlayingBarRight
        loadMoreTracks={loadMoreTracks}
        refreshToken={refreshToken}
      />
    </div>
  );
}
