import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductCard.scss";
import oreoImage from "./oo.jpg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

// const imageVarient = {
//     initial:{
//         scale:0
//     },

// }

const ProductCard = () => {
  const [mouseEnetred, setMouseEntered] = useState(false);
  return (
    <div
      className="product__card"
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    >
      <div className="off">
        <p>6% OFF</p>
        <section>
          <FavoriteBorderOutlinedIcon />
        </section>
      </div>
      <div className="product__image">
        <motion.img
          src={oreoImage}
          alt="oreo"
          //   initial={{ scale: 0.5 }}
          animate={{ scale: mouseEnetred ? 1.1 : 1 }}
          style={{ x: -90 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </div>
      <div className="product__info">
        <p>Available (In Stock)</p>
        <h3>Oreo hsdbcjhbd</h3>
        <p>
          <span>$0.66</span>
          <span>$1.2</span>
        </p>
      </div>
      <div className="product__buying__option">
        <section>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </section>
        <section>
          <ShoppingCartOutlinedIcon />
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
