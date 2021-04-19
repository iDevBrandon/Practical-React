import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/disney-logo.png" alt="Disney+" />
      </Logo>
      <NavMenu>
        <Link to="/home">
          <FaHome />
          <span>HOME</span>
        </Link>
        <Link to="/home">
          <FaHome />
          <span>HOME</span>
        </Link>
        <Link to="/home">
          <FaHome />
          <span>HOME</span>
        </Link>
        <Link to="/home">
          <FaHome />
          <span>HOME</span>
        </Link>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  transition: opacity 0.5s ease-out;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 100px;
  max-height: 70px;
  transition: all 0.2s ease 0s;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    span:before {
      transform: scaleX() (1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export default Header;
