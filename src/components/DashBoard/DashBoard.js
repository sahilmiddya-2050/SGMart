import React from "react";
import { Avatar } from "@material-ui/core";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import MyOrders from "./Pages/MyOrders/MyOrders";
import MyWallet from "./Pages/MyWallet/MyWallet";
import ShoppingWishlist from "./Pages/ShoppingWishlist/ShoppingWishlist";
import MyAdress from "./Pages/MyAdress/MyAdress";
import Login from "./Pages/Authentication/Login";
import "./DashBoard.scss";

const DashBoard = (props) => {
  //   console.log(props);
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
          <Link to={`${props.match.path}/overview`} className="Link">
            Overview
          </Link>
          <Link className="Link">
            My Orders
          </Link>
          <Link className="Link">
            My Rewards
          </Link>
          <Link className="Link">
            My Wallet
          </Link>
          <Link className="Link">
            Shopping Wishlist
          </Link>
          <Link  className="Link">
            My Address
          </Link>
          <Link className="Link">
            Logout
          </Link>
        </div>
        <div className="option__content">
          {/* <Overview /> */}
          {/* <BrowserRouter>
            <Switch>
              <Route path={`${props.match.path}/overview`}>
                <Overview />
              </Route>
            </Switch>
          </BrowserRouter> */}
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
          <h1>DashBoard</h1>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
