import React from "react";
import DateTime from "./DateTime";
import UserIcon from "./UserIcon";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import styles from "./Topbar.module.scss";

export default function Topbar({
  currentPage,
  profile,
  setCurrentTab,
  currentTab,
}) {
  return (
    <div className={styles.topbar}>
      <div className={styles.wrapper}>
        {currentPage === "Browse" && <Searchbar />}

        {currentPage === "Collection" && (
          <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        )}
      </div>
      <DateTime />
      <UserIcon profile={profile} />
    </div>
  );
}
