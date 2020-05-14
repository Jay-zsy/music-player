import React from "react";
import styles from "./Ellipsis.module.scss";
export default function Ellipsis() {
  return (
    <div className={styles.loader}>
      <div className={styles.dots}></div>
    </div>
  );
}
