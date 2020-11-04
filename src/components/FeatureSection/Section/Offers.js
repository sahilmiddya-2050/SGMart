import React from "react";
import OfferCard from "../Cards/OfferCard";
import mixedVegi from "../Cards/offer-images/mixed-vegi.jpg";
import fruits from "../Cards/offer-images/fruits.jpg";
import peanut from "../Cards/offer-images/peanut.jpg";

import "./Offer.scss";

const timer = "";

const Offers = () => {
  return (
    <div className="offer__offers">
      <p>Offers</p>
      <h2>Best Values</h2>

      <div className="offers">
        <OfferCard image={fruits} content="" />
        <OfferCard image={mixedVegi} />
        <OfferCard image={fruits} timer={timer} />
      </div>
      <div className="cupon">
        <img src={peanut} alt="" />
      </div>
    </div>
  );
};

export default Offers;
