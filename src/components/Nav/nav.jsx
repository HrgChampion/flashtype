import React from "react";
import "./nav.css";
import logo from "./../../assets/logo flash.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="github-link "
          href="https://github.com/HrgChampion"
          rel="noreferrer"
        >
          HrgChampion
        </a>
      </div>
    </div>
  );
};

export default Nav;
