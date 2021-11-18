import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";

const SearchResults = ({ businesses }) => {
  if (!businesses.length) {
    return <div></div>;
  }

  const searchResults = businesses.map((business) => (
    <SearchResult key={business.id} businesses={business} />
  ));
  return <div className={styles["search-results"]}>{searchResults}</div>;
};

export default SearchResults;
