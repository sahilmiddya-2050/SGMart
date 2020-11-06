import React from "react";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ArrowDropDownOutlined from "@material-ui/icons/ArrowDropDownOutlined";

import "./Overview.scss";
const Overview = (props) => {
  return (
    <div className="overview">
      <div className="overview__header">
        <section>
          <DashboardOutlinedIcon className="DashboardOutlinedIcon" />
          <p>Overview</p>
        </section>
        <h1>Hi! John</h1>
      </div>
      <div className="overview__grid">
        <div className="overview__reward">
          <h3>My Rewards</h3>
          <div className="reward__details">
            <p>6 Rewards</p>
            <section>
              <span>Won $2</span>
              <span>Won 40% Off</span>
              <span>Cashback $1</span>
              <span>+More</span>
            </section>
          </div>
          <p>Rewards and Details &gt;&gt;</p>
        </div>
        <div className="overview__order">
          <h3>My Orders</h3>
          <div className="order__details">
            <p>2 Recently Purchases</p>
            <section>
              <span>
                2 Items <ArrowDropDownOutlined />
              </span>
              <span>On the way</span>
              <span>$22</span>
            </section>
          </div>
          <p>All Orders &gt;&gt;</p>
        </div>
        <div className="overview__wallet">
          <h3>My Wallet</h3>
          <div className="wallet__details">
            <p>Credits $100</p>
            <section>
              <span>
                <PaymentOutlinedIcon /> Patment Methods
              </span>
              <span>
                <CardGiftcardIcon /> 3 Offers Active
              </span>
              <span>$22</span>
            </section>
          </div>
          <p>Wallet Details &gt;&gt;</p>
        </div>
        <div className="overview__address">
          <h3>Current Address</h3>
          <div className="address__details">
            <p>Home</p>
            <section>
              <span>
                <HomeOutlinedIcon /> Payment Methods
              </span>
              <span>
                #0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur
                road, Ludhiana, 141001
              </span>
              <span>Edit Address </span>
            </section>
          </div>
          <p>All Address &gt;&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
