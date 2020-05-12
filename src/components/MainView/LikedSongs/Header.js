import React from "react";
import { calculatePlaytime } from "../../../helperFn/helperFn";
import styles from "./Header.module.scss";
export default function Header({ name, profile, savedTracks }) {
  return (
    <div className={styles.header}>
      <div className={styles.imgWrapper}>
        <img
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          alt="Liked songs"
        />
      </div>
      <div className={styles.title}>
        <h2>"PLAYLIST"</h2>
        <h1>"Liked Songs"</h1>
        <div className={styles.userInfo}>
          <img src={profile} alt="Profile" />
          <div className={styles.name}>{name}</div>
          <div className={styles.separator}>•</div>
          <div className={styles.duration}>
            {calculatePlaytime(savedTracks?.myTracks)}
          </div>
          <div className={styles.separator}>•</div>
          <div className={styles.count}>
            {`${savedTracks.offset + 50} / ${savedTracks.total}`}
          </div>
        </div>
      </div>
    </div>
  );
}
