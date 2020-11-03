import React from "react";
import CategorySection from "./Section/CategorySection";
import Offers from "./Section/Offers";
import Products from "./Section/Products";
import "./FeatureSection.scss";

const FeatureSection = () => {
  return (
    <div className="feature__section">
      <CategorySection />
      <Products />
      <Products />
      <Offers />
    </div>
  );
};

export default FeatureSection;
