import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger">
      <div onClick={() => onClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hamburger;
