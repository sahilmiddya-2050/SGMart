import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import CategoryCard from "../Cards/CategoryCard";
import "./CategorySection.scss";

SwiperCore.use([Navigation]);

const CategorySection = () => {
  return (
    <div className="category__section">
      <p>Shop By</p>
      <h2>Categories</h2>
      <Swiper
        preloadImages={false}
        navigation
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          1345: { slidesPerView: 6, spaceBetween: 10 },
          1248: { slidesPerView: 5, spaceBetween: 10 },
          915: { slidesPerView: 4, spaceBetween: 10 },
          650: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySection;
