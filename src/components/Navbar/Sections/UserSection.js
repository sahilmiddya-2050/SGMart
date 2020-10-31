import React from "react";
import { Avatar, FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import Dropdown from "../../Dropdown/Dropdown";
import { Link } from "react-router-dom";
const UserSection = () => {
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
          <Link to="/">Dashboard</Link>
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
    <div className="navbar__userinfo">
      <Dropdown
        dropdownInfo={userDropdownInfo}
        dropdownItems={userDropdownItems}
        left="-86%"
        top="100%"
      />
    </div>
  );
};

export default UserSection;
