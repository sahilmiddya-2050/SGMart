import React from "react";
import "./OfferCard.scss";

const OfferCard = ({ image, timer }) => {
  return (
    <div className="offer__card">
      <img src={image} alt="" />
      <h1>{timer}</h1>
    </div>
  );
};

export default OfferCard;
