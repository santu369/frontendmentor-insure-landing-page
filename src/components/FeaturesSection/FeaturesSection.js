import React from "react";
import "./featuressection.scss";
import snappyProcessIcon from "../../images/icon-snappy-process.svg";
import affordablePricesIcon from "../../images/icon-affordable-prices.svg";
import peopleFirstIcon from "../../images/icon-people-first.svg";
import Features from "../Features/Features";

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="features__heading">We’re different</h2>
      <Features
        features={[
          {
            src: snappyProcessIcon,
            title: "snappy process",
            description:
              "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
          },
          {
            src: affordablePricesIcon,
            title: "affordable prices",
            description:
              "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
          },
          {
            src: peopleFirstIcon,
            title: "people first",
            description:
              "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
          },
        ]}
      />
    </section>
  );
};

export default FeaturesSection;
