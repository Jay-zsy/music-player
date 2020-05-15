import React from "react";
import styles from "./TrackImage.module.scss";
export default function TrackImage({ cover }) {
  return (
    <div className={styles.container}>
      <img src={cover} alt="Now playing" />
    </div>
  );
}
