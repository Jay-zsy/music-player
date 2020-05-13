import React from "react";
import styles from "./Browse.module.scss";
export default function Browse({ categories }) {
  return (
    <section aria-label="Browse categories" className={styles.block}>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div className={styles.left}>"Browse all"</div>
        </div>
        {categories?.items.map((category) => {
          return (
            <div className={styles.card} key={category.id}>
              <div className={styles.contentWrapper}>
                <div className={styles.cover}>
                  <img src={category?.icons[0].url} alt="Cover art" />
                </div>
                <div className={styles.info}>
                  <div className={styles.top}>{category?.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
