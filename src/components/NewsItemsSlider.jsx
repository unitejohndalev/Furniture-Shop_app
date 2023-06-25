import React from "react";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import data
import { newInStore } from "../data";

const NewsItemsSlider = () => {
  return (
    <Swiper
      className=""
      grabCursor={true}
      breakpoints={{
        320: {
          slidePerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidePerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide key={index} className="max-w-[265px] ">
            <div className="relative">
              <img
                className="rounded-lg"
                src={product.image.type}
                alt="productImage"
              />
              <div
                className="absolute text-black bottom-[20px]
              w-full text-center text-[18px] lg:text-2xl
              capitalize font-medium"
              >
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewsItemsSlider;
