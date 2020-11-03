import React from "react";
import "./ProductCard.scss";
import image from "./vegetables.jpg";

const ProductCard = ({
  productImage,
  offPercent,
  offerTitle = "Buy More & Save More",
  productType,
}) => {
  return (
    <main className="productCard">
      <div className="productCard__details">
        <img src={image} alt="" />
        <article>
          <p>{offPercent}% OFF</p>
          <p>{offerTitle}</p>
          <p>{productType}</p>
        </article>
        <button>Shop Now</button>
      </div>
    </main>
  );
};

export default ProductCard;
