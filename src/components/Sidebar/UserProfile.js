import React from "react";
import styles from "./UserProfile.module.scss";
export default function UserProfile({ username, email, profile, product }) {
  return (
    <div className={styles.profileContainer}>
      {profile ? (
        <>
          <div className={styles.product}>{product || '"Your product"'}</div>
          <img
            src={profile}
            alt="Your profile"
            className={styles.profilePicture}
          ></img>
        </>
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <div className={styles.name}>{username || '"Your name"'}</div>
    </div>
  );
}
