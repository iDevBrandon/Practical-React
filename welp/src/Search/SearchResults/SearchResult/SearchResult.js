import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = () => {
  return (
    <div className={styles["search-result"]}>
      <img src="https://via.placeholder.com/150" alt="postImage" />
      <p>info</p>
      <p>data</p>
    </div>
  );
};

export default SearchResult;
