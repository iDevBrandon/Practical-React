import React from "react";
import styled from "styled-components";
import { FiSearch, FiHome } from "react-icons/fi";

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.span`
  margin-right: 8px;
  img {
    width: 2.5rem;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  width: 100%;

  position: relative;
  display: flex;
  max-width: 280px;
  .search-icon {
    position: absolute;
    top: 10px;
    left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.15s;
  }
  input {
    border: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      &:hover {
        border-bottom: 2px solid black;
      }
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="./images/linked.png" alt="" />
          </a>
        </Logo>
        <Search>
          <FiSearch className="search-icon" />
          <input type="text" />
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <FiHome />
                <span>Home</span>
              </a>
            </NavList>
            <NavList className="active">
              <a href="/">
                <FiHome />
                <span>Home</span>
              </a>
            </NavList>
            <NavList className="active">
              <a href="/">
                <FiHome />
                <span>Home</span>
              </a>
            </NavList>
            <NavList className="active">
              <a href="/">
                <FiHome />
                <span>Home</span>
              </a>
            </NavList>
            <NavList className="active">
              <a href="/">
                <FiHome />
                <span>Home</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
