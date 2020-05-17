import React, { useRef, useEffect } from "react";
import styles from "./Searchbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
export default function Searchbar({ query, handleOnChangeQuery, setQuery }) {
  const inputRef = useRef(null);

  const handleOnCancel = () => {
    setQuery("");
    inputRef.current.value = "";
  };

  return (
    <div className={styles.searchbar}>
      <input
        ref={inputRef}
        placeholder="Search for Artists, Songs or Albums"
        autoCapitalize="off"
        autoCorrect="off"
        defaultValue={query}
        onChange={(e) => handleOnChangeQuery(e)}
      />
      <div className={styles.overlay}>
        <SearchIcon style={{ width: "24px", height: "24px" }} />

        {query && (
          <ClearIcon
            style={{ width: "24px", height: "24px", pointerEvents: "auto" }}
            onClick={handleOnCancel}
          />
        )}
      </div>
    </div>
  );
}
