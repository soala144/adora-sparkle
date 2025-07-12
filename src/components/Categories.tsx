"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const categories = [
  { category: "Waistbeads", image: "/images/waist-beads.jpg" },
  { category: "Bracelets", image: "/images/bracelets.jpg" },
  { category: "Anklets", image: "/images/anklets.jpg" },
  { category: "Phone Charms", image: "/images/phone-charms.jpg" },
  { category: "Thigh Beads", image: "/images/thigh-beads.jpg" },
  { category: "Jewelries", image: "/images/jewelry-beads.jpg" },
  { category: "Gift Box", image: "/images/gift-box.jpg" },
];

const Categories = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
      <p className="text-center text-gray-600 mb-6">
        Swipe through our beautiful handcrafted bead collections.
      </p>

      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.category}>
            <div className="flex flex-col items-center p-4">
              <figure className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={cat.image}
                  alt={cat.category}
                  className="h-full w-full object-cover"
                />
              </figure>
              <p className="text-xl mt-2">{cat.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
