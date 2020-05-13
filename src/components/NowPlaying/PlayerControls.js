import React from "react";
import PlaybackBar from "./PlaybackBar";
import styles from "./PlayerControls.module.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import { StylesProvider } from "@material-ui/core/styles";
import { buttonStyle } from "../../helperFn/helperFn";
export default function PlayerControls({
  skipToNext,
  skipToPrevious,
  play,
  currentPlayback,
  pause,
  toggleShuffle,
  toggleRepeat,
}) {
  return (
    <div className={styles.controls}>
      <div className={styles.buttons}>
        <StylesProvider injectFirst>
          {currentPlayback.shuffle && (
            <button onClick={toggleShuffle}>
              <ShuffleIcon
                style={
                  currentPlayback.shuffle
                    ? buttonStyle("active")
                    : buttonStyle("inactive")
                }
              />
            </button>
          )}
          <button onClick={skipToPrevious}>
            <SkipPreviousIcon style={buttonStyle("inactive")} />
          </button>
          {currentPlayback.paused ? (
            <button onClick={play} className={styles.center}>
              <PlayArrowIcon style={buttonStyle("inactive")} />
            </button>
          ) : (
            <button onClick={pause} className={styles.center}>
              <PauseIcon style={buttonStyle("inactive")} />
            </button>
          )}
          <button onClick={skipToNext}>
            <SkipNextIcon style={buttonStyle("inactive")} />
          </button>
          {currentPlayback.repeat_mode === 2 && (
            <button onClick={toggleRepeat}>
              <RepeatOneIcon style={buttonStyle("active")} />
            </button>
          )}
          {currentPlayback.repeat_mode === 1 && (
            <button onClick={toggleRepeat}>
              <RepeatIcon style={buttonStyle("active")} />
            </button>
          )}
          {currentPlayback.repeat_mode === 0 && (
            <button onClick={toggleRepeat}>
              <RepeatIcon style={buttonStyle("inactive")} />
            </button>
          )}
        </StylesProvider>
      </div>
      <PlaybackBar
        duration={currentPlayback?.duration}
        position={currentPlayback?.position}
      />
    </div>
  );
}
