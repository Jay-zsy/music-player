import React from "react";
import styles from "./PlayingBarLeft.module.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getArtistsNames } from "../../helperFn/helperFn";
export default function PlayingBarLeft({ currentPlayback }) {
  return (
    <div className={styles.left}>
      <div className={styles.cover}>
        <img
          src={
            currentPlayback.track_window?.current_track?.album?.images[0].url
          }
          alt="Now playing"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          {currentPlayback.track_window?.current_track?.name}
        </div>
        <div className={styles.artists}>
          {getArtistsNames(
            currentPlayback.track_window?.current_track?.artists
          )}
        </div>
      </div>

      <button className={styles.like}>
        <FavoriteIcon style={{ fontSize: "16px" }} />
      </button>
      {/* <div>popout feature (stretch)</div> */}
    </div>
  );
}
