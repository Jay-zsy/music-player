import React from "react";
import { calculatePlaytime } from "../../../helperFn/helperFn";
import styles from "./Header.module.scss";
export default function Header({ name, total, tracks, cover, title }) {
  return (
    <div className={styles.header}>
      <div className={styles.imgWrapper}>
        <img src={cover} alt="Liked songs" />
      </div>
      <div className={styles.title}>
        <h2>"PLAYLIST"</h2>
        <h1>{`"${title}"`}</h1>
        <div className={styles.userInfo}>
          <div className={styles.name}>{name}</div>
          <div className={styles.separator}>•</div>
          <div className={styles.duration}>
            {calculatePlaytime(tracks, true)}
          </div>
          <div className={styles.separator}>•</div>
          <div className={styles.count}>{`${total} tracks`}</div>
        </div>
      </div>
    </div>
  );
}
