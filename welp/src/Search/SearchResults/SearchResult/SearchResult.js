import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = () => {
  return (
    <div className={styles["search-result"]}>
      <img
        src="https://via.placeholder.com/210"
        alt="postImage"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h2 className="subtitle">burger place</h2>
        <BusinessRating />
        <p>
          $$ <span className="tag">Burger</span>{" "}
          <span className="tag">Fast food</span>
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>+44 2362 236235</p>
        <p>Birmingham Int'l airport</p>
      </div>
    </div>
  );
};

export default SearchResult;
