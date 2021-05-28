import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";
import styles from "./SubNav.module.css";

const SubNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurants" icon="fa-utensils" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Auto Services" icon="fa-car-side" />
          <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>

        <div>
          <button
            className={`button ${styles["subnav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fa fa-pen"></i>
            </span>
            <span>Write a review</span>
          </button>
          <button className={`button ${styles["subnav-button"]}`}>
            <span className="icon">
              <i className="fa fa-store"></i>
            </span>
            <span>For businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
