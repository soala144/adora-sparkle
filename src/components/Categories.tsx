"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";

const categories = [
  {
    category: "Waistbeads",
    image: "/images/waist-beads.jpg",
    description: "Elegant waist adornments",
    count: "24 designs",
  },
  {
    category: "Bracelets",
    image: "/images/bracelets.jpg",
    description: "Timeless wrist elegance",
    count: "18 designs",
  },
  {
    category: "Anklets",
    image: "/images/anklets.jpg",
    description: "Delicate ankle beauty",
    count: "15 designs",
  },
  {
    category: "Phone Charms",
    image: "/images/phone-charms.jpg",
    description: "Personal tech style",
    count: "12 designs",
  },
  {
    category: "Thigh Beads",
    image: "/images/thigh-beads.jpg",
    description: "Bold thigh statement",
    count: "20 designs",
  },
  {
    category: "Jewelries",
    image: "/images/jewelry-beads.jpg",
    description: "Complete jewelry sets",
    count: "30 designs",
  },
  {
    category: "Gift Box",
    image: "/images/gift-box.jpg",
    description: "Curated gift collections",
    count: "8 designs",
  },
];

const Categories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-700">
              Collections
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted collections, each piece carefully designed
            to bring out your natural beauty and confidence.
          </p>
        </div>

        {/* Categories Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="!pb-16"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={cat.category}>
                <div className="group cursor-pointer">
                  <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.category}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-gray-700">
                          {cat.count}
                        </span>
                      </div>

                      {/* Hover Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                          <FaArrowRight className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                        {cat.category}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {cat.description}
                      </p>

                      {/* Explore Button */}
                      <button className="w-full bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 py-3 px-4 rounded-xl font-medium hover:from-gray-100 hover:to-slate-100 transition-all duration-300 border border-gray-200 hover:border-gray-300 group-hover:shadow-md">
                        Explore Collection
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev absolute top-1/2 left-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform -translate-y-1/2 flex items-center justify-center group">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="swiper-button-next absolute top-1/2 right-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform -translate-y-1/2 flex items-center justify-center group">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Categories
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
