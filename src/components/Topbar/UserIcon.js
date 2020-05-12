import React from "react";
import styles from "./UserIcon.module.scss";
export default function UserIcon({ profile }) {
  return (
    <div className={styles.userIcon}>
      <img
        src={profile}
        alt="Your profile"
        className={styles.profileIcon}
      ></img>
    </div>
  );
}
