import React from "react";
import styles from "./Searchbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
export default function Searchbar({ query, handleOnChangeQuery }) {
  const handleOnClick = () => {
    console.log("hello");
  };

  return (
    <div className={styles.searchbar}>
      <input
        placeholder="Search for Artists, Songs or Albums"
        autoCapitalize="off"
        autoCorrect="off"
        value={query}
        onChange={(e) => handleOnChangeQuery(e)}
      />
      <div className={styles.overlay}>
        <SearchIcon style={{ width: "24px", height: "24px" }} />
        <ClearIcon
          style={{ width: "24px", height: "24px" }}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
}
