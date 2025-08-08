"use client";
import React, { useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/product";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
    <div className="w-[90%] m-auto my-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our Best Selling Items
      </h1>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Desktop Swiper */}
        <Swiper
          modules={[FreeMode]}
          spaceBetween={16}
          slidesPerView={2}
          grabCursor={true}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1100: { slidesPerView: 5 },
          }}
          ref={swiperRef}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="hidden sm:block"
        >
          {products.map((product, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-white rounded-lg my-3 cursor-pointer hover:shadow-lg transition h-[340px] flex flex-col justify-between"
            >
              <div
                className="flex flex-col items-center px-2 pt-3 flex-1"
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded mb-3 w-30 h-20"
                  width={130}
                  height={80}
                  priority
                />
                <h2 className="text-[18px] font-semibold text-center truncate w-full mb-1">
                  {product.name}
                </h2>
                <p className="text-[#ff66d1] font-bold text-center text-[16px]">
                  {product.price}
                </p>
              </div>
              <button
                className="bg-pink-700 hover:bg-[#ff66d1] duration-500 flex items-center justify-center gap-3 text-white px-5 w-full py-3 rounded-b-md font-medium text-xs transition-all"
                onClick={() => handleAddToCart(product)}
              >
                <HiShoppingCart size={20} />
                <p>Add to Cart</p>
              </button>
            </SwiperSlide>
          ))}

          {/* Navigation arrows */}
          <button
            className={`shadow-lg absolute top-1/2 right-3 z-50 bg-white size-10 rounded-full text-[#ff66d1] hover:text-white flex items-center justify-center hover:bg-[#ff66d1] transform -translate-y-1/2 ${
              isHovered ? "" : "hidden"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>
          <button
            className={`shadow-lg absolute top-1/2 left-3 text-[#ff66d1] hover:text-white z-50 bg-white size-10 rounded-full flex items-center justify-center hover:bg-[#ff66d1] transform -translate-y-1/2 ${
              isHovered ? "" : "hidden"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
        </Swiper>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-2 flex flex-col justify-between h-[280px] hover:shadow-lg transition"
            >
              <div
                className="flex flex-col items-center flex-1"
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded mb-2 w-30 h-20"
                  width={130}
                  height={80}
                  priority
                />
                <h2 className="text-[14px] font-semibold text-center truncate mb-1">
                  {product.name}
                </h2>
                <p className="text-[#ff66d1] font-bold text-center text-[14px]">
                  {product.price}
                </p>
              </div>
              <button
                className="bg-pink-700 hover:bg-[#ff66d1] duration-500 flex items-center justify-center gap-2 text-white px-3 w-full py-2 rounded-md font-medium text-xs transition-all"
                onClick={() => handleAddToCart(product)}
              >
                <HiShoppingCart size={16} />
                <p>Add</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 justify-center flex">
        <button className="bg-[#ff66d1] text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-all flex items-center">
          <Link href="/products">View All</Link>
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Product;
