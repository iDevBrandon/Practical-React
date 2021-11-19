import React from "react";
import Spinner from "../../Spinner/Spinner";
import SearchResult from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";

const SearchResults = ({ businesses }) => {
  let searchResults = <Spinner />;
  if (businesses.length) {
    searchResults = businesses.map((business) => (
      <SearchResult key={business.id} businesses={business} />
    ));
  }

  return <div className={styles["search-results"]}>{searchResults}</div>;
};

export default SearchResults;
