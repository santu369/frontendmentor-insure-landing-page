import React from "react";
import "./footer.scss";
import logo from "../../images/logo.svg";
import facebookLogo from "../../images/icon-facebook.svg";
import twitterLogo from "../../images/icon-twitter.svg";
import pinterestLogo from "../../images/icon-pinterest.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import FooterNav from "../FooterNav/FooterNav";
import FooterSocials from "../FooterSocials/FooterSocials";

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <div className="footer__branding">
          {/* eslint-disable-next-line */}
          <a href="#" target="_self">
            <img src={logo} alt="" className="footer__logo" />
            <span className="sr-only">Project Tracking Logo</span>
          </a>
        </div>
        <div className="footer__socials">
          <FooterSocials
            icons={[
              { src: facebookLogo, alt: "Facebook Logo" },
              { src: twitterLogo, alt: "Twitter Logo" },
              { src: pinterestLogo, alt: "Pinterest Logo" },
              { src: instagramLogo, alt: "Instagram Logo" },
            ]}
          />
        </div>
      </div>
      <div className="footer__navs">
        <FooterNav
          title={"our company"}
          links={["how we work", "why invest?", "view plans", "reviews"]}
        />
        <FooterNav
          title={"help me"}
          links={["faq", "terms of use", "privacy policy", "cookies"]}
        />
        <FooterNav
          title={"contact"}
          links={["sales", "support", "live chat"]}
        />
        <FooterNav title={"others"} links={["careers", "press", "licenses"]} />
      </div>
      {children}
    </footer>
  );
};

export default Footer;
