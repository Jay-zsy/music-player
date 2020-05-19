import React from "react";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import styles from "./Entry.module.scss";

export default function Entry() {
  return (
    <div className={styles.entry}>
      <a
        href={
          process.env.REACT_APP_API_URL
            ? `${process.env.REACT_APP_API_URL}/api/spotify`
            : "https://powerful-everglades-87732.herokuapp.com/api/spotify"
        }
      >
        <PowerSettingsNewRoundedIcon style={{ fontSize: "96px" }} />
      </a>
    </div>
  );
}
