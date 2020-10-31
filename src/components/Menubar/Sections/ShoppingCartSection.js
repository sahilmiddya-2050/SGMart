import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

const ShoppingCartSection = () => {
  return (
    <div className="menubar__shopping-cart">
      <ShoppingCartOutlinedIcon className="menubar__shopping-cart-icon" />
      <p className="menubar__shopping-cart--responsive">Cart</p>
      <p>2</p>
      <ArrowDropDownOutlinedIcon />
    </div>
  );
};

export default ShoppingCartSection;
