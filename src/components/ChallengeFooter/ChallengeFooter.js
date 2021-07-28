import React from "react";
import "./challengefooter.scss";

const ChallengeFooter = () => {
  return (
    <div className="challengefooter">
      <p className="challengefooter__section">
        Challenge by
        <a
          className="challengefooter__link"
          href="https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p className="challengefooter__section">
        Coded by
        <a
          className="challengefooter__link"
          href="https://twitter.com/santu69"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shiva Santosh Jana
        </a>
        .
      </p>
    </div>
  );
};

export default ChallengeFooter;
