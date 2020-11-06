import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Route, Link } from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import MyOrders from "./Pages/MyOrders/MyOrders";
import MyWallet from "./Pages/MyWallet/MyWallet";
import MyRewards from "./Pages/MyRewards/MyRewards";
import ShoppingWishlist from "./Pages/ShoppingWishlist/ShoppingWishlist";
import MyAdress from "./Pages/MyAdress/MyAdress";
import Login from "./Pages/Authentication/Login";
import "./DashBoard.scss";

const DashBoard = (props) => {
  const [current, setCurrent] = useState(false);

  // console.log(props);
  return (
    <div className="dashboard">
      <div className="dashboard-user__information">
        <Avatar className="avatar" />
        <h1>John Doe</h1>
        <p>+919999999999</p>
        <section>Points : 20</section>
      </div>
      <main>
        <div className="option__nav">
          <Link
            // onClick={(e) => console.log(e)}
            // onFocus={(e) => console.log(e)}
            to="/dashboard/overview"
            className="Link"
          >
            Overview
          </Link>
          <Link to="/dashboard/my-orders" className="Link">
            My Orders
          </Link>
          <Link to="/dashboard/my-rewards" className="Link">
            My Rewards
          </Link>
          <Link to="/dashboard/my-wallet" className="Link">
            My Wallet
          </Link>
          <Link to="/dashboard/shopping-wishlist" className="Link">
            Shopping Wishlist
          </Link>
          <Link to="/dashboard/my-address" className="Link">
            My Address
          </Link>
          <Link to="/dashboard/login" className="Link">
            Logout
          </Link>
        </div>
        <div className="option__content">
          <Route exact path="/dashboard">
            <Overview />
          </Route>
          <Route path="/dashboard/overview">
            <Overview />
          </Route>
          <Route path="/dashboard/my-orders">
            <MyOrders />
          </Route>
          <Route path="/dashboard/my-rewards">
            <MyRewards />
          </Route>
          <Route path="/dashboard/my-wallet">
            <MyWallet />
          </Route>
          <Route path="/dashboard/shopping-wishlist">
            <ShoppingWishlist />
          </Route>
          <Route path="/dashboard/my-address">
            <MyAdress />
          </Route>
          <Route path="/dashboard/login">
            <Login />
          </Route>
          {/* <h1>DashBoard</h1> */}
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
