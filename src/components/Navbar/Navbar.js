import React from "react";
import { Avatar } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>SGMart</h1>
        <div className="navbar__location">
          <LocationOnOutlinedIcon className="navbar__location-icon" />
          <p>Howrah</p>
          <ArrowDropDownOutlinedIcon className="navbar__location-dropdown" />
        </div>
        <div className="navbar__search">
          <SearchIcon className="navbar__search-icon" />
          <input
            type="text"
            name=""
            className="navbar__search-input"
            id=""
            placeholder="Search for products.."
          />
        </div>
        <section className="navbar__information">
          <div className="navbar__phone">
            <PhoneOutlinedIcon className="navbar__phone-icon" />
            <p className="navbar__phone-number"> 1800-000-000 </p>
          </div>
          <div className="navbar__offers">
            <CardGiftcardIcon className="navbar__offers-icon" /> <p>Offer</p>
          </div>
          <div className="navbar__help">
            <HelpOutlineOutlinedIcon className="navbar__help-icon" />
            <p>Help</p>
          </div>
          <div className="navbar__wishlist">
            <FavoriteBorderOutlinedIcon className="navbar__wishlist-icon" />
            <p>3</p>
          </div>
          <div className="navbar__userinfo">
            <Avatar className="navbar__userinfo-avatar" />
            <p>John Doe</p>
            <ArrowDropDownOutlinedIcon className="navbar__userinfo-dropdown" />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
