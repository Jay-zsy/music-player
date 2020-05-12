import React from "react";
import styles from "./PlayingBarRight.module.scss";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { toggleMute, buttonStyle } from "../../helperFn/helperFn";
export default function PlayingBarRight({ loadMoreTracks, refreshToken }) {
  return (
    <div className={styles.right}>
      <div className={styles.volume}>
        <button onClick={toggleMute}>
          <VolumeUpIcon style={buttonStyle("inactive")} />
        </button>
        <button onClick={refreshToken}>
          <VolumeDownIcon style={buttonStyle("inactive")} />
        </button>
        <button onClick={loadMoreTracks}>
          <VolumeMuteIcon style={buttonStyle("inactive")} />
        </button>
        <button onClick={toggleMute}>
          <VolumeOffIcon style={buttonStyle("inactive")} />
        </button>
      </div>
    </div>
  );
}
