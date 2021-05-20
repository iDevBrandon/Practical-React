import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="Tesla Logo"
          />
        </Link>
      </div>
      <div className="login__language">
        <LanguageOutlinedIcon />
        <span>en-US</span>
      </div>
    </div>
  );
};

export default Login;
