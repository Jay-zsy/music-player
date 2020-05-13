import React, { useRef, useEffect } from "react";
import styles from "./PlaybackBar.module.scss";
import { msToTime, updateProgress, delta } from "../../helperFn/helperFn";
export default function PlaybackBar({ duration, position, currentPlayback }) {
  const progress = useRef(null);
  useEffect(() => {
    // if (currentPlayback.paused) {
    //   progress.current.innerHTML = msToTime(currentPlayback.position);
    // }
    if (currentPlayback.paused === false) {
      let offset = Date.now();
      const interval = setInterval(() => {
        progress.current.innerHTML = msToTime(
          updateProgress(currentPlayback.position, delta, offset)
        );
      }, 1);
      return () => clearInterval(interval);
    }
  }, [currentPlayback]);
  return (
    <div className={styles.playbackbar}>
      <div
        ref={progress}
        className={styles.position}
        style={{ fontSize: "11px", minWidth: "40px", textAlign: "center" }}
      >
        {position > 0 ? msToTime(position) : "0:00"}
      </div>

      <div className={styles.progressbar}>
        <div className={styles.progressbarBG}>
          <div className={styles.progressbarFG}></div>
          <button className={styles.progressChange}></button>
        </div>
      </div>

      <div
        className={styles.duration}
        style={{ fontSize: "11px", minWidth: "40px", textAlign: "center" }}
      >
        {duration ? msToTime(duration) : "0:00"}
      </div>
    </div>
  );
}
