import React from "react";
import "./features.scss";

const Feature = ({ features }) => {
  return (
    <ul className="features__list">
      {features.map((feature, index) => {
        return (
          <li className="features__item" key={index}>
            <img className="features__icon" src={feature.src} alt="" />
            <h3 className="features__item-heading">{feature.title}</h3>
            <p className="features__item-description">{feature.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Feature;
