import React from "react";
import styles from "./FeaturedPlaylists.module.scss";
export default function FeaturedPlaylists({ message, featuredPlaylists }) {
  return (
    <section aria-label="Featured playlists" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Featured playlists"</div>
          <div className={styles.right}>"See all"</div>
          <div className={styles.desc}>{`"${message}"`}</div>
        </div>
        {featuredPlaylists?.items.map((playlist, index) => {
          if (index < 6) {
            return (
              <div className={styles.card} key={playlist.id}>
                <div className={styles.contentWrapper}>
                  <div className={styles.cover}>
                    <img src={playlist?.images[0].url} alt="Album art" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.top}>{playlist?.name}</div>
                    <div className={styles.bot}>{playlist?.description}</div>
                  </div>
                </div>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </section>
  );
}
