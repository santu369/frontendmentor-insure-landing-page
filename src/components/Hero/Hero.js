import React from "react";
import "./hero.scss";
import mobileHeroImg from "../../images/image-intro-mobile.jpg";
import desktopHeroImg from "../../images/image-intro-desktop.jpg";
import CallToAction from "../CallToAction/CallToAction";

const Hero = () => {
  return (
    <div className="hero row">
      <div className="hero__img-container col-md-6 order-md-2">
        <picture className="hero__picture">
          <source media="(min-width:48rem)" srcSet={desktopHeroImg} />
          <source media="(min-width:20rem)" srcSet={mobileHeroImg} />
          <img
            src={desktopHeroImg}
            alt="Parents taking care of their two kids"
            loading="lazy"
          />
        </picture>
      </div>
      <section className="hero__section col-md-6 order-md-1">
        <h1 className="hero__heading">Humanizing your insurance.</h1>
        <p className="lead hero__subheading">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <CallToAction name="view plans" />
      </section>
    </div>
  );
};

export default Hero;
