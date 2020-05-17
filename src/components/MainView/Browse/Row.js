import React from "react";
import styles from "./Row.module.scss";
export default function Row({ label, contexts }) {
  return (
    <section aria-label={`${label}`} className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"{label}"</div>
          <div className={styles.right}>"See all"</div>
        </div>
        {contexts?.map((context, index) => {
          if (index < 6) {
            return (
              <div className={styles.card} key={context.id}>
                <div className={styles.contentWrapper}>
                  <div className={styles.cover}>
                    <img src={context?.images[0].url} alt="Album art" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.top}>{context?.name}</div>
                    <div className={styles.bot}>{context?.description}</div>
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
