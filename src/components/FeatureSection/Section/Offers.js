import React from "react";
import OfferCard from "../Cards/OfferCard";
import nuts from "../Cards/offer-images/nuts.jpg";
import mixedVegi from "../Cards/offer-images/mixed-vegi.jpg";
import fruits from "../Cards/offer-images/fruits.jpg";

import "./Offer.scss";

const timer = "";

const Offers = () => {
  return (
    <div className="offres">
      <OfferCard image={fruits} />
      <OfferCard image={mixedVegi} />
      <OfferCard image={nuts} timer={timer} />
    </div>
  );
};

export default Offers;
