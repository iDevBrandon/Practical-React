import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = ({ businesses }) => {
  if (!businesses) {
    return <div />;
  }

  // console.log(businesses);
  const tags = businesses.categories.map((category, index) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={businesses.id + businesses.title + index}
    >
      {category.title}
    </span>
  ));
  const addressLines = businesses.location.display_address.map(
    (addressLine, index) => <p key={addressLine.id}>{addressLine}</p>
  );

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
          {businesses.price} {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{businesses.display_phone}</p>
        <p>{addressLines}</p>
      </div>
    </div>
  );
};

export default SearchResult;
