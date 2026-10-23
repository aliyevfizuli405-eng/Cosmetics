import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/js/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Card } from "@/components/Card/Card";

export const Product = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <section className="mx-[10%] py-45">
        <h3 className="eyri text-[#d05278] text-[50px] text-center">
          Cosmetics
        </h3>
        <h2 className="text yazi2 text-[54px] text-center">
          Trending products
        </h2>
        <div className="flex justify-center items-center ">
          <p className=" text-[#666666] max-w-md yazi2 text-center">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 gap-2 mb-10">
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            Make Up
          </button>
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            SPA
          </button>
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            Perfume
          </button>
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            Nails
          </button>
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            Skin Care
          </button>
          <button className="px-7.5 py-1.5 border border-gray-200 yazi1 text-gray-600 text-[16px]">
            Hair Care
          </button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide>
              <Card product={product}></Card>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </section>
    </>
  );
};
