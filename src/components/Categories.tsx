"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";

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
  const swiperRef = useRef<any>(null);
  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
      <p className="text-center text-gray-600 mb-6">
        Swipe through our beautiful handcrafted bead collections.
      </p>
      {/* Custom Controller Buttons (Desktop & Mobile) */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 shadow transition"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Category"
        >
          <FaArrowLeft size={22} />
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 shadow transition"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Category"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        freeMode={true}
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        className="flex"
      >
        {categories.map((cat) => (
          <div key={cat.category}>
            <div className="flex flex-col items-center p-4">
              <figure className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={cat.image}
                  alt={cat.category}
                  className="h-full w-full object-cover"
                  width={192}
                  height={192}
                  priority
                />
              </figure>
              <p className="text-xl mt-2">{cat.category}</p>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
