import React, { useRef, useEffect } from "react";
import styles from "./PlaybackBar.module.scss";
import {
  msToTime,
  updateProgress,
  delta,
  progressFill,
  seek,
} from "../../helperFn/helperFn";
export default function PlaybackBar({ duration, position, currentPlayback }) {
  const progress = useRef(null);
  const fill = useRef(null);
  useEffect(() => {
    if (currentPlayback.paused === false) {
      let offset = Date.now();
      const interval = setInterval(() => {
        progress.current.innerHTML = msToTime(
          updateProgress(currentPlayback.position, delta, offset)
        );
        fill.current.style.width = progressFill(
          updateProgress(currentPlayback.position, delta, offset),
          currentPlayback.duration
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

      <div
        className={styles.progressbar}
        onClick={(e) => {
          seek(e, currentPlayback.duration);
        }}
      >
        <div className={styles.progressbarBG}>
          <div
            className={styles.progressbarFG}
            ref={fill}
            style={{
              width: progressFill(
                currentPlayback.position,
                currentPlayback.duration
              ),
            }}
          ></div>
          {/* <button className={styles.progressChange}></button> */}
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
