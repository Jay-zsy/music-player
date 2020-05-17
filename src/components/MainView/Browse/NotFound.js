import React from "react";
import styles from "./NotFound.module.scss";
export default function NotFound({ query }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>No results found for "{query}"</p>
      <p className={styles.message}>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </p>
    </div>
  );
}
