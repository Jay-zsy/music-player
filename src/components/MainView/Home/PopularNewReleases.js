import React from "react";
import styles from "./PopularNewReleases.module.scss";
import { getArtistsNames } from "../../../helperFn/helperFn";
export default function PoppularNewReleases({ newReleases }) {
  return (
    <section aria-label="Popular new releases" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Popular new releases"</div>
          <div className={styles.right}>"See all"</div>
        </div>
        {newReleases.map((release, index) => {
          if (index < 6) {
            return (
              <div className={styles.card} key={release.id}>
                <div className={styles.contentWrapper}>
                  <div className={styles.cover}>
                    <img src={release?.images[0].url} alt="Album art" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.top}>
                      {getArtistsNames(release?.artists)}
                    </div>
                    <div className={styles.bot}>{release?.name}</div>
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
