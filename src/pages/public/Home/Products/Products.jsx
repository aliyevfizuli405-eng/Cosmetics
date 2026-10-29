
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/js/products";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Card } from "@/components/Card/Card";
import { BrandLogos } from "@/components/brandLogos/BrandLogos";

export const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Make Up",
    "SPA",
    "Skin care",
    "Hair care",
  ];

  const handleCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.category.includes(category)
        )
      );
    }
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

        <div className="flex justify-center items-center">
          <p className="text-[#666666] max-w-md yazi2 text-center">
            Nourish your skin with toxin-free cosmetic products.
            With the offers that you can’t refuse.
          </p>
        </div>

     
        <div className="flex  flex-col  sm:flex-row justify-center items-center mt-10 gap-2 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`px-7.5 py-1.5 border w-full sm:w-auto border-gray-200 yazi1 text-[16px] transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-[#d05278] text-white border-[#d05278]"
                  : "text-gray-600 hover:bg-[#d05278] hover:text-white hover:border-[#d05278]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {filteredProducts.map((filteredProduct) => (
            <SwiperSlide key={filteredProduct.id}>
              <Card product={filteredProduct} />
            </SwiperSlide>
          ))}
        </Swiper>
        <BrandLogos/>
      </section>
    </>
  );
};
