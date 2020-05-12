import React from "react";
import styles from "./Albums.module.scss";
export default function Albums({ albums }) {
  return (
    <section aria-label="Albums" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Albums"</div>
        </div>
        {albums.map((album) => {
          return (
            <div className={styles.card} key={album?.added_at}>
              <div className={styles.contentWrapper}>
                <div className={styles.cover}>
                  <img src={album?.album?.images[0].url} alt="Cover art" />
                </div>
                <div className={styles.info}>
                  <div className={styles.top}>{album?.album?.name}</div>
                  <div
                    className={styles.bot}
                  >{`By ${album?.album?.label}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
