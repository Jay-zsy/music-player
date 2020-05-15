import React from "react";
import styles from "./TrackImage.module.scss";
export default function TrackImage({
  cover,
  name,
  expandedView,
  setExpandedView,
}) {
  return (
    <div
      className={expandedView ? styles.container : styles.containerShifted}
      onClick={() => setExpandedView(false)}
    >
      <img src={cover} alt={`Now playing: ${name}`} />
    </div>
  );
}
