import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import ProductCard from "./Section/ProductCard";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "./ProductSlider1.scss";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

export const ProductSlider1 = () => {
  return (
    <div className="productSlider1">
      <Swiper
        preloadImages={false}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={35}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        className="slider__container"
        breakpoints={{
          1377: { slidesPerView: 4, spaceBetween: 35 },
          1248: { slidesPerView: 3, spaceBetween: 35 },
          828: { slidesPerView: 2, spaceBetween: 35 },
          // 730: { slidesPerView: 2, spaceBetween: 35 },
        }}
      >
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard offPercent="6" productType="Fresh Vegetables" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
