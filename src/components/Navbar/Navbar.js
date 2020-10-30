import React from "react";
import {
  Avatar,
  Typography,
  Ra,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import "./Navbar.scss";
import Dropdown from "../Dropdown/Dropdown";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  const locationDropdownInfo = (
    <React.Fragment>
      <LocationOnOutlinedIcon />
      <p>Howrah</p>
      <ArrowDropDownOutlinedIcon />
    </React.Fragment>
  );
  const locationDropdownItems = (
    <React.Fragment>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Howrah</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>New Delhi</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Bangaluru</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Mumbai</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Hydrabad</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Kolkata</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Ludhiana</p>
      </li>
      <li className="aligned">
        <LocationOnOutlinedIcon /> <p>Chandigarh</p>
      </li>
    </React.Fragment>
  );
  const userDropdownInfo = (
    <div className="dropdown__userinfo">
      <Avatar className="navbar__userinfo-avatar" />
      <p>John Doe</p>
      <ArrowDropDownOutlinedIcon className="navbar__userinfo-dropdown" />
    </div>
  );
  const userDropdownItems = (
    <React.Fragment>
      <div className="user-aligned night">
        <NightsStayOutlinedIcon />
        <p>Night mode</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                size="small" /*checked={checked} onChange={toggleChecked}*/
              />
            }
          />
        </FormGroup>
      </div>
      <hr />
      <li className="user-aligned">
        <DashboardOutlinedIcon />
        <p>
          <Link>Dashboard</Link>
        </p>
      </li>
      <li className="user-aligned">
        <ListAltIcon />
        <p>My Orders</p>
      </li>
      <li className="user-aligned">
        <FavoriteBorderOutlinedIcon />
        <p>My Wishlist</p>
      </li>
      <li className="user-aligned">
        <AccountBalanceWalletOutlinedIcon />
        <p>My wallet</p>
      </li>
      <li className="user-aligned">
        <LocationOnOutlinedIcon />
        <p>My Address</p>
      </li>
      <li className="user-aligned">
        <CardGiftcardIcon />
        <p>Offers</p>
      </li>
      <li className="user-aligned">
        <LiveHelpOutlinedIcon />
        <p>Faq</p>
      </li>
      <li className="user-aligned">
        <LockOutlinedIcon />
        <p>Logout</p>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar">
      <BrowserRouter>
        <nav>
          <h1>SGMart</h1>
          <div className="navbar__location">
            {/* <LocationOnOutlinedIcon className="navbar__location-icon" />
          <p>Howrah</p>
          <ArrowDropDownOutlinedIcon className="navbar__location-dropdown" /> */}
            <Dropdown
              dropdownInfo={locationDropdownInfo}
              dropdownItems={locationDropdownItems}
              top="100%"
            />
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
              <Dropdown
                dropdownInfo={userDropdownInfo}
                dropdownItems={userDropdownItems}
                left="-50%"
                top="100%"
              />
            </div>
          </section>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
