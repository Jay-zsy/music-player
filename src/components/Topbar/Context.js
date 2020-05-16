import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import styles from "./Context.module.scss";
export default function Context({ context, paused, play, pause }) {
  return (
    <div className={styles.context}>
      {paused ? (
        <button onClick={play}>
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        </button>
      ) : (
        <button onClick={pause}>
          <PauseIcon style={{ width: "28px", height: "28px" }} />
        </button>
      )}
      <div className={styles.title}>{`"${context}"`}</div>
    </div>
  );
}
