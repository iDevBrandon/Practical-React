import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = ({ term, location }) => {
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <SearchBar small term={term} location={location} />
      <button className={`button ${styles["nav-button"]}`}>Sign In</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button>
    </div>
  );
};

export default NavBar;
