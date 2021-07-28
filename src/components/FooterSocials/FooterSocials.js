import React from "react";
import SlideFromLeft from "../Animations/SlideFromLeft/SlideFromLeft";
import "./footersocials.scss";

const FooterSocials = ({ icons }) => {
  return (
    <ul className="footer__socials-list">
      {icons.map((icon, index) => {
        return (
          <li className="footer__socials-item" key={index}>
            <SlideFromLeft>
              {/* eslint-disable-next-line */}
              <a href="#" target="_self" className="footer__socials-link">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="footer__socials-icon"
                />
              </a>
            </SlideFromLeft>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterSocials;
