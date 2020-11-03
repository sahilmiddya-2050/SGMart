import React from "react";
import ProductCard from "../Cards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "./Products.scss";

SwiperCore.use([Navigation]);

const Products = () => {
  return (
    <div className="product__section">
      <p>For You</p>
      <h2>Top Featured Products</h2>
      <Swiper
        preloadImages={false}
        navigation
        loop
        slidesPerView={1.5}
        spaceBetween={10}
        breakpoints={{
          //   1345: { slidesPerView: 4, spaceBetween: 10 },
          1300: { slidesPerView: 4, spaceBetween: 10 },
          954: { slidesPerView: 3, spaceBetween: 10 },
          663: { slidesPerView: 2, spaceBetween: 30 },
          //   480: { slidesPerView: 2, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products;
