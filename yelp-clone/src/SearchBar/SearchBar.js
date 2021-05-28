import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function submit(e) {
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={term}
            placeholder="burgers, barbers, spas, handmen"
            onChange={(e) => setTerm(e.target.value)}
          />
        </p>
        <div className="control ">
          <div className={`button is-static ${sizeClass}`}>NEAR</div>
        </div>
        <p className="control ">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={location}
            placeholder="where"
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <div
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={submit}
        >
          <span className={`icon is-small ${styles["search-icon"]}`}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
