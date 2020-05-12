import React from "react";
import styles from "./Artists.module.scss";
export default function Artists({ artists }) {
  return (
    <section aria-label="Artists" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Artists"</div>
        </div>
        {artists.map((artist) => {
          return (
            <div className={styles.card} key={artist.id}>
              <div className={styles.contentWrapper}>
                <div className={styles.cover}>
                  <img src={artist?.images[0].url} alt="Cover art" />
                </div>
                <div className={styles.info}>
                  <div className={styles.top}>{artist?.name}</div>
                  <div
                    className={styles.bot}
                  >{`${artist?.followers?.total} followers`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
