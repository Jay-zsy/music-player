import React from "react";
import styles from "./PlaybackBar.module.scss";
import { msToTime } from "../../helperFn/helperFn";
export default function PlaybackBar({ duration }) {
  return (
    <div className={styles.playbackBar}>
      <div className={styles.currentProgress}></div>
      <div className={styles.progressbar}></div>
      {duration && (
        <div className={styles.duration} style={{ fontSize: "11px" }}>
          {msToTime(duration)}
        </div>
      )}
    </div>
  );
}
