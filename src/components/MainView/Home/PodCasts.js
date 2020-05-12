import React from "react";
import styles from "./PodCasts.module.scss";
export default function PodCasts({ podcasts }) {
  return (
    <section aria-label="Your top podcasts" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Your top podcasts"</div>
          <div className={styles.right}>"See all"</div>
        </div>
        {podcasts.map((podcast, index) => {
          if (index < 6) {
            return (
              <div className={styles.card} key={podcast.added_at}>
                <div className={styles.contentWrapper}>
                  <div className={styles.cover}>
                    <img src={podcast?.show?.images[0].url} alt="Album art" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.top}>{podcast?.show?.name}</div>
                    <div className={styles.bot}>
                      {podcast?.show?.description}
                    </div>
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
