import React from "react";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

import "./Overview.scss";
const Overview = (props) => {
  return (
    <div className="overview">
      <div className="overview__header">
        <span>
          <DashboardOutlinedIcon />
        </span>
        <span>Overview</span>
        <h1>Hi! John</h1>
      </div>
      <div className="overview__grid">
        <div className="overview__reward">
          <h3>My Rewards</h3>
          <div className="reward__details">
            <p>6 Rewards</p>
            <span>Won $2</span>
            <span>Won 40% Off</span>
            <span>Cashback $1</span>
            <span>+More</span>
          </div>
          <p>Rewards and Details &gt;&gt;</p>
        </div>
        <div className="overview__order">
          <h3>My Orders</h3>
          <div className="order__details">
            <p>2 Recently Purchases</p>
            <span>
              2 Items <p>?</p>
            </span>
            <span>On the way</span>
            <span>$22</span>
          </div>
          <p>All Orders &gt;&gt;</p>
        </div>
        <div className="overview__wallet">
          <h3>My Wallet</h3>
          <div className="wallet__details">
            <p>Credits $100</p>
            <span>
              <PaymentOutlinedIcon /> Patment Methods
            </span>
            <span>
              <CardGiftcardIcon /> 3 Offers Active
            </span>
            <span>$22</span>
          </div>
          <p>Wallet Details &gt;&gt;</p>
        </div>
        <div className="overview__address">
          <h3>Current Address</h3>
          <div className="address__details">
            <p>Home</p>
            <span>
              <HomeOutlinedIcon /> Patment Methods
            </span>
            <span>
              #0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur
              road, Ludhiana, 141001
            </span>
            <span>Edit Address </span>
          </div>
          <p>All Address &gt;&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
