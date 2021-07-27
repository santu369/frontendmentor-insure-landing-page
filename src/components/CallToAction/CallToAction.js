import React from "react";
import "./calltoaction.scss";

const Button = ({ className, name }) => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <a href="#" target="_self" className={`cta-btn ${className}`}>
        {name}
      </a>
    </>
  );
};

export default Button;
