import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  const submitHandler = (e) => {
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    e.preventDefault();
  };

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={submitHandler}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            placeholder="burgers, spas, handman.."
            value={term}
          />
        </p>
        <div className="control is-medium">
          <div className={`button ${sizeClass} is-static`}>Near</div>
        </div>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where you wanna go?"
            value={location}
          />
        </p>
        <button
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={submitHandler}
        >
          <span className={`icon is-small ${styles["search-icon"]}`}>🔍</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
