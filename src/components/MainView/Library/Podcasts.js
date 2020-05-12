import React from "react";
import styles from "./Podcasts.module.scss";
export default function Podcasts({ podcasts }) {
  return (
    <section aria-label="My podcasts" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Podcasts"</div>
        </div>
        {podcasts.map((podcast) => {
          return (
            <div className={styles.card} key={podcast.added_at}>
              <div className={styles.contentWrapper}>
                <div className={styles.cover}>
                  <img src={podcast?.show?.images[0].url} alt="Cover art" />
                </div>
                <div className={styles.info}>
                  <div className={styles.top}>{podcast?.show?.name}</div>
                  <div
                    className={styles.bot}
                  >{`By ${podcast?.show?.publisher}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
