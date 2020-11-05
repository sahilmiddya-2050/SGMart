import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Navbar from "./components/Navbar/Navbar";
import { ProductSlider1 } from "./components/ProductSlider1/ProductSlider1";
import "./App.scss";
import FeatureSection from "./components/FeatureSection/FeatureSection";
// import Overview from "./components/DashBoard/Pages/Overview/Overview";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Menubar />
      </header>
      <div className="app__main">
        <Switch>
          <Route path="/" exact>
            <ProductSlider1 />
            <div className="main__body">
              <FeatureSection />
            </div>
          </Route>
          <Route path="/dashboard" exact>
            <DashBoard />
            {/* <Overview /> */}
          </Route>
          <Route path="/dashboard/:section" exact component={DashBoard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
