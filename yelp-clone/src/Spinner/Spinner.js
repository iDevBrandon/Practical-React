import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={`button is-loading is-large ${styles.spinner}`}>
      Loading
    </div>
  );
};

export default Spinner;
