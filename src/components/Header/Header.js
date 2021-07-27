import React from "react";
import "./header.scss";
import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

const Header = ({ menuState, menuToggled, toggleNav }) => {
  return (
    <header className="header p-4 d-flex align-items-center justify-content-between">
      {/* eslint-disable-next-line */}
      <a href="#" className="header__branding" target="_self">
        <img src={logo} alt="" className="header__logo" />
        <span className="sr-only">Project Tracking Logo</span>
      </a>
      <button
        onClick={toggleNav}
        className="header__menu"
        aria-expanded={menuState}
      >
        <img
          className="header__menu-icon"
          src={menuState ? closeIcon : hamburgerIcon}
          alt={menuState ? "Menu Close Icon" : "Menu Hamburger Icon"}
        />
      </button>
      <nav
        className={`header__popup ${menuState ? "header__popup--open" : ""} ${
          !menuState && menuToggled ? "header__popup--close" : ""
        }`}
      >
        <ul className="header__nav-list">
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              how we work
            </a>
          </li>
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              blog
            </a>
          </li>
          <li className="header__nav-item">
            {/* eslint-disable-next-line */}
            <a href="#" target="_self" className="header__nav-link">
              account
            </a>
          </li>
          <li className="header__nav-item header__nav-item--highlight">
            {/* eslint-disable-next-line */}
            <a
              href="#"
              target="_self"
              className="header__nav-link header__nav-link--highlight"
            >
              view plans
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
