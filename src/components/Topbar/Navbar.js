import React from "react";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";
import styles from "./Navbar.module.scss";
export default function Navbar({ setCurrentTab, currentTab }) {
  return (
    <div className={styles.navbar}>
      <StylesProvider injectFirst>
        <Button
          className={
            currentTab === "Playlists" ? styles.tabsActive : styles.tabs
          }
          onClick={() => {
            setCurrentTab("Playlists");
          }}
        >
          Playlists
        </Button>
        <Button
          className={
            currentTab === "Podcasts" ? styles.tabsActive : styles.tabs
          }
          onClick={() => {
            setCurrentTab("Podcasts");
          }}
        >
          Podcasts
        </Button>
        <Button
          className={currentTab === "Artists" ? styles.tabsActive : styles.tabs}
          onClick={() => {
            setCurrentTab("Artists");
          }}
        >
          Artists
        </Button>
        <Button
          className={currentTab === "Albums" ? styles.tabsActive : styles.tabs}
          onClick={() => {
            setCurrentTab("Albums");
          }}
        >
          Albums
        </Button>
      </StylesProvider>
    </div>
  );
}
