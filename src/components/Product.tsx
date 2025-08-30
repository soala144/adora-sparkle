"use client";
import React, { useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/product";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaStar, FaHeart } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import Link from "next/link";

const Product = () => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<any>(null);
  const router = useRouter();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price.replace(/[^\d.]/g, "")),
      img: product.image,
      quantity: 1,
      color: product.color,
      size: product.size,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <IoSparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Best Sellers
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Best Selling Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the most loved pieces from our collection, crafted with
            precision and designed for elegance.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          {/* Desktop Swiper */}
          <Swiper
            modules={[FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
            ref={swiperRef}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="hidden sm:block !pb-8"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={300}
                        priority
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Wishlist Button */}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-500 hover:text-white">
                        <FaHeart className="w-4 h-4" />
                      </button>

                      {/* Rating Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <FaStar className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-semibold text-gray-700">
                          4.8
                        </span>
                      </div>

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                          <span className="text-sm font-medium text-gray-700">
                            Quick View
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-gray-600">
                            {product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            $29.99
                          </span>
                        </div>

                        {/* Colors & Sizes */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-1">
                            {["bg-red-500", "bg-blue-500", "bg-green-500"].map(
                              (color, i) => (
                                <div
                                  key={i}
                                  className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${color}`}
                                ></div>
                              )
                            )}
                          </div>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">S, M, L</span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white py-3 px-4 rounded-xl font-medium hover:from-gray-700 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group-hover:shadow-2xl"
                        onClick={() => handleAddToCart(product)}
                      >
                        <HiShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {products.slice(0, 6).map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                    priority
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FaHeart className="w-3 h-3 text-gray-600" />
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-lg font-bold text-gray-600 mb-2">
                    {product.price}
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white py-2 px-3 rounded-lg font-medium text-sm hover:from-gray-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center gap-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <HiShoppingCart className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className={`absolute top-1/2 right-4 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform -translate-y-1/2 flex items-center justify-center group ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight className="w-5 h-5 text-gray-600 group-hover:text-gray-600 transition-colors duration-300" />
          </button>

          <button
            className={`absolute top-1/2 left-4 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform -translate-y-1/2 flex items-center justify-center group ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-600 transition-colors duration-300" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View All Products
              <FaArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
