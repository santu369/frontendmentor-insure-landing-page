import React from "react";
import "./banner.scss";
import CallToAction from "../CallToAction/CallToAction";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner__heading">Find out more about how we work</h2>
      <CallToAction className="banner__cta" name="how we work" />
    </div>
  );
};

export default Banner;
