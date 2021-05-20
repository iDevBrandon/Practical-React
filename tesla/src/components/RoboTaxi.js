import React from "react";
import { Link } from "react-router-dom";

const RoboTaxi = () => {
  return (
    <div>
      <h1>We will be here soon!</h1>
      <Link to="/">
        <img
          className="header__logoImg"
          src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
          alt="Tesla Logo"
        />
      </Link>
    </div>
  );
};

export default RoboTaxi;
