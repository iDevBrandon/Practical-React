import React from "react";
import styles from "./SearchSuggestions.module.css";

const SearchSuggestions = () => {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fas fa-search"></i>
      </span>
      <span className={styles.suggestion}>Resturants</span>
      <span className="icon is-small">
        <i className="fas fa-cocktail"></i>
      </span>
      <span className={styles.suggestion}>Night life</span>
      <span className="icon is-small">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion}>Service</span>
      <span className="icon is-small">
        <i className="fas fa-truck"></i>
      </span>
      <span className={styles.suggestion}>Dlivery</span>
    </div>
  );
};

export default SearchSuggestions;
