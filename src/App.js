import React from "react";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Navbar from "./components/Navbar/Navbar";
import { ProductSlider1 } from "./components/ProductSlider1/ProductSlider1";
import "./App.scss";
import FeatureSection from "./components/FeatureSection/FeatureSection";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Menubar />
      </header>
      <div className="app__main">
        <ProductSlider1 />
        <div className="main__body">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
}

export default App;
