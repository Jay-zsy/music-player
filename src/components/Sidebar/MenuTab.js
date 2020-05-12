import React from "react";
import styles from "./MenuTab.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ViewListIcon from "@material-ui/icons/ViewList";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function MenuTab({ setCurrentPage }) {
  return (
    <div className={styles.menuTab}>
      <div
        className={styles.section}
        onClick={() => {
          setCurrentPage("Home");
        }}
      >
        <HomeIcon style={{ width: "24px", height: "24px" }} />
        <div className={styles.label}>Home</div>
      </div>

      <div
        className={styles.section}
        onClick={() => {
          setCurrentPage("Browse");
        }}
      >
        <SearchIcon style={{ width: "24px", height: "24px" }} />
        <div className={styles.label}>Browse</div>
      </div>

      <div
        className={styles.section}
        onClick={() => {
          setCurrentPage("Collection");
        }}
      >
        <ViewListIcon style={{ width: "24px", height: "24px" }} />
        <div className={styles.label}>Your Library</div>
      </div>

      <div
        className={styles.section}
        onClick={() => {
          setCurrentPage("Liked");
        }}
      >
        <FavoriteIcon style={{ width: "24px", height: "24px" }} />
        <div className={styles.label}>Liked songs</div>
      </div>
    </div>
  );
}
