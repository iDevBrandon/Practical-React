import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const sizeClass = props.small ? "" : "is-medium";
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            placeholder="burgers, spas, handman.."
          />
        </p>
        <p className="control is-medium">
          <button className={`button ${sizeClass} is-static`}>Near</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            placeholder="Where you wanna go?"
          />
        </p>
        <button className={`button ${sizeClass} ${styles["search-button"]}`}>
          <span className={`icon is-small ${styles["search-icon"]}`}>🔍</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
