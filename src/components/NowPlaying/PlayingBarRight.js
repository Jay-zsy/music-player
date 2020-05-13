import React from "react";
import styles from "./PlayingBarRight.module.scss";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { buttonStyle, volumeFill } from "../../helperFn/helperFn";
export default function PlayingBarRight({
  volume,
  toggleVolume,
  updateVolume,
}) {
  return (
    <div className={styles.right}>
      <div className={styles.volume}>
        {volume.current > 0.74 && (
          <button onClick={() => toggleVolume(volume)}>
            <VolumeUpIcon style={buttonStyle("inactive")} />
          </button>
        )}
        {volume.current <= 0.74 && volume > 0.24 && (
          <button onClick={() => toggleVolume(volume)}>
            <VolumeDownIcon style={buttonStyle("inactive")} />
          </button>
        )}
        {volume.current <= 0.24 && volume >= 0.01 && (
          <button onClick={() => toggleVolume(volume)}>
            <VolumeMuteIcon style={buttonStyle("inactive")} />
          </button>
        )}
        {volume.current === 0 && (
          <button onClick={() => toggleVolume(volume)}>
            <VolumeOffIcon style={buttonStyle("inactive")} />
          </button>
        )}

        <div className={styles.progress}>
          <div
            className={styles.progressbarBG}
            onClick={(e) => updateVolume(e)}
          >
            <div
              className={styles.progressbarFG}
              style={{ width: volumeFill(volume.current) }}
            >
              {/* <button className={styles.progressChange}></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
