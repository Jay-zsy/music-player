import React from "react";
import styles from "./Divider.module.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
export default function Divider({ play, pause, currentPlayback }) {
  return (
    <div className={styles.divider}>
      <div className={styles.buttonWrapper}>
        {currentPlayback.paused ? (
          <button onClick={play}>
            <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
          </button>
        ) : (
          <button onClick={pause}>
            <PauseIcon style={{ width: "28px", height: "28px" }} />
          </button>
        )}
      </div>
    </div>
  );
}
