import React from "react";
import "./footernav.scss";

const FooterNav = ({ title, links }) => {
  return (
    <div className="footer__nav">
      <h3 className="footer__nav-title">{title}</h3>
      <ul className="footer__list">
        {links.map((link, index) => {
          return (
            <li className="footer__item" key={index}>
              {/* eslint-disable-next-line */}
              <a href="#" target="_self" className="footer__link">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
