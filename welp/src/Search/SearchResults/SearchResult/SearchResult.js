import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = ({ businesses }) => {
  if (!businesses) {
    return <div />;
  }

  console.log(businesses);

  return (
    <div className={styles["search-result"]}>
      <img
        src={businesses.image_url}
        alt="postImage"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h2 className="subtitle">{businesses.name}</h2>
        <BusinessRating
          reviewCount={businesses.review_count}
          rating={businesses.rating}
        />
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
