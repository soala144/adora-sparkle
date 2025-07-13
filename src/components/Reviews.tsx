"use client";
import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Adaora O.",
    image: "/images/waist-beads.jpg",
    review:
      "Absolutely stunning beads! The quality and colors are even better in person. Will definitely order again!",
    rating: 5,
    title: "Waist Beads Purchase",
  },
  {
    name: "Chinwe E.",
    image: "/images/bracelets.jpg",
    review:
      "Fast delivery and beautiful packaging. The waist beads fit perfectly and make me feel so confident!",
    rating: 5,
    title: "Fast Delivery & Perfect Fit",
  },
  {
    name: "Blessing T.",
    image: "/images/anklets.jpg",
    review:
      "I love the attention to detail. The customer service was also top-notch. Highly recommend!",
    rating: 4,
    title: "Great Service",
  },
  {
    name: "Ngozi M.",
    image: "/images/jewelry-beads.jpg",
    review:
      "The best gift I’ve given myself this year. Sparkles just as promised!",
    rating: 5,
    title: "Sparkling Gift",
  },
];

import Image from "next/image";
import { useRef } from "react";

const Reviews: React.FC = () => {
  const swiperRef = useRef<any>(null);
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-pink-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-700">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto relative">
        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex justify-end gap-3 mb-4">
          <button
            className="bg-white border border-pink-200 rounded-full p-2 shadow hover:bg-pink-50 transition"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Review"
          >
            <FaArrowLeft className="text-pink-600" size={22} />
          </button>
          <button
            className="bg-white border border-pink-200 rounded-full p-2 shadow hover:bg-pink-50 transition"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Review"
          >
            <FaArrowRight className="text-pink-600" size={22} />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {reviews.map((r, idx) => (
            <SwiperSlide key={idx} className="flex h-full">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full w-full mx-2 border border-pink-100 hover:shadow-2xl transition min-h-[320px]">
                <div className="flex flex-col items-center mb-3">
                  <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-2">
                    <Image
                      src={r.image}
                      alt={r.name}
                      width={96}
                      height={96}
                      className="rounded-full border-2 border-pink-300 object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-semibold text-pink-700 text-base mb-1">
                    {r.name}
                  </span>
                  <span className="text-xs text-gray-400 mb-1">{r.title}</span>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < r.rating ? "text-yellow-400" : "text-gray-300"
                        }
                        size={18}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-2 font-medium line-clamp-5">
                  “{r.review}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
