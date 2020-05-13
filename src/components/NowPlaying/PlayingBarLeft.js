import React from "react";
import styles from "./PlayingBarLeft.module.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import {
  getArtistsNames,
  likeTrack,
  unlikeTrack,
} from "../../helperFn/helperFn";
export default function PlayingBarLeft({ currentPlayback, liked, setLiked }) {
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
            currentPlayback?.track_window?.current_track?.artists
          )}
        </div>
      </div>

      {liked[0] ? (
        <button
          className={styles.like}
          onClick={() => {
            unlikeTrack(
              currentPlayback?.track_window?.current_track?.id,
              setLiked
            );
          }}
        >
          <FavoriteIcon style={{ fontSize: "16px", color: "#1db954" }} />
        </button>
      ) : (
        <button
          className={styles.like}
          onClick={() => {
            likeTrack(
              currentPlayback?.track_window?.current_track?.id,
              setLiked
            );
          }}
        >
          <FavoriteBorderOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      )}
    </div>
  );
}
