import React from "react";
import styles from "./PlaybackBar.module.scss";
import { msToTime } from "../../helperFn/helperFn";
export default function PlaybackBar({ duration, position }) {
  console.log(position);
  return (
    <div className={styles.playbackbar}>
      <div
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
