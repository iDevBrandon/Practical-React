import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <button className={`button ${styles.spinner} is-loading is-large`}>
      Loading
    </button>
  );
};

export default Spinner;
