import React from "react";
import SlideFromLeft from "../Animations/SlideFromLeft/SlideFromLeft";
import "./footernav.scss";

const FooterNav = ({ title, links }) => {
  return (
    <div className="footer__nav">
      <h3 className="footer__nav-title">{title}</h3>
      <ul className="footer__list">
        {links.map((link, index) => {
          return (
            <li className="footer__item" key={index}>
              <SlideFromLeft>
                {/* eslint-disable-next-line */}
                <a href="#" target="_self" className="footer__link">
                  {link}
                </a>
              </SlideFromLeft>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
