import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ dropdownInfo, dropdownItems, width, left, top }) => {
  return (
    <div className="dropdown">
      {dropdownInfo}
      <ul
        className="dropdown__items"
        style={{ width: width, left: left, top: top }}
      >
        {dropdownItems}
      </ul>
    </div>
  );
};

export default Dropdown;
