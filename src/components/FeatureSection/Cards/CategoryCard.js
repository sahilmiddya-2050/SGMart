import React from "react";
import "./CategoryCard.scss";
import CategorySvg from "./vegetables-svgrepo-com.svg";

const CategoryCard = () => {
  return (
    <div className="category__card">
      <img src={CategorySvg} alt="" />
      <p>Vegetables & Fruits</p>
    </div>
  );
};

export default CategoryCard;
