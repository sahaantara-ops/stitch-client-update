"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../../assets/brand1.webp";
import brand2 from "../../../assets/baner2.webp";
import brand3 from "../../../assets/brand 3.webp";
import brand4 from "../../../assets/brand 4.jpg";
import brand5 from "../../../assets/protex_logo.png";

const brandLogos = [
  { name: "Brand1", logo: brand1 },
  { name: "Brand2", logo: brand2 },
  { name: "Brand3", logo: brand3 },
  { name: "Brand4", logo: brand4 },
  { name: "Protex", logo: brand5 },
];

const Brands = ({ onSelectBrand }) => {
  const [active, setActive] = useState("all");

  const handleSelect = (brand) => {
    setActive(brand);
    onSelectBrand?.(brand);
  };

  return (
    <div className="py-10">
      {/* TITLE */}
      <h2 className="text-center text-2xl font-bold mb-6">
        Our Brands
      </h2>

      {/* ALL BUTTON */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleSelect("all")}
          className={`px-4 py-2 rounded-full border transition ${
            active === "all"
              ? "bg-pink-500 text-white"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          All
        </button>
      </div>

      {/* SWIPER */}
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {brandLogos.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleSelect(brand.name)}
              className={`flex justify-center items-center cursor-pointer transition transform
                ${
                  active === brand.name
                    ? "scale-110 opacity-100"
                    : "opacity-60 hover:opacity-100"
                }
              `}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-20 h-20 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;