import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Menubar.scss";
import CategorySection from "./Sections/CategorySection";
import PagesSection from "./Sections/PagesSection";
import SearchSection from "./Sections/SearchSection";
import ShoppingCartSection from "./Sections/ShoppingCartSection";

const Menubar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = (e) => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  const style =
    windowWidth <= 1064
      ? {
          zIndex: open === true && "9",
          visibility: open === true && "visible",
          left: open === true && "0",
        }
      : { display: "flex" };

  return (
    <div className="menubar">
      <Hamburger onClick={() => setOpen(!open)} />
      <CategorySection />
      <div className="menubar__menus" style={style}>
        <div>Home</div>
        <div>New Products</div>
        <div>Featured Products</div>
        <PagesSection />
        <div>Contact Us</div>
      </div>
      <ShoppingCartSection />
      <SearchSection />
    </div>
  );
};

export default Menubar;
