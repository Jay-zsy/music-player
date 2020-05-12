import React from "react";
import styles from "./Playlists.module.scss";
export default function Playlists({ playlists }) {
  return (
    <section aria-label="My playlists" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Playlists"</div>
        </div>
        {playlists.map((playlist) => {
          return (
            <div className={styles.card} key={playlist.id}>
              <div className={styles.contentWrapper}>
                <div className={styles.cover}>
                  <img src={playlist?.images[0].url} alt="Cover art" />
                </div>
                <div className={styles.info}>
                  <div className={styles.top}>{playlist?.name}</div>
                  <div
                    className={styles.bot}
                  >{`By ${playlist?.owner.display_name}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
