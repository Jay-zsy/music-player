import React from "react";
import styles from "./RecentlyPlayed.module.scss";
import { getArtistsNames, filterDuplicates } from "../../../helperFn/helperFn";
export default function RecentlyPlayed({ recentTracks }) {
  return (
    <section aria-label="Recently played" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Recently played"</div>
          <div className={styles.right}>"See all"</div>
        </div>
        {filterDuplicates(recentTracks).map((track, index) => {
          if (index < 6) {
            return (
              <div className={styles.card} key={track.played_at}>
                <div className={styles.contentWrapper}>
                  <div className={styles.cover}>
                    <img
                      src={track?.track?.album?.images[0].url}
                      alt="Album art"
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.top}>
                      {getArtistsNames(track?.track?.artists)}
                    </div>
                    <div className={styles.bot}>{track.track.name}</div>
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
