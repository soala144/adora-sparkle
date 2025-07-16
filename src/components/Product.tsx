"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { HiShoppingCart } from "react-icons/hi";

const products: {id: number; name: string; image: string; price: string}[] = [
  {
    id: 1,
    name: "Kouya Waist Bead",
    image: "/images/waist-beads.jpg",
    price: "₦77,900.00",
  },
  {
    id: 2,
    name: "Classic Bracelet",
    image: "/images/bracelets.jpg",
    price: "₦25,000.00",
  },
  {
    id: 3,
    name: "Elegant Anklet",
    image: "/images/anklets.jpg",
    price: "₦18,500.00",
  },
  {
    id: 4,
    name: "Phone Charm",
    image: "/images/phone-charms.jpg",
    price: "₦10,000.00",
  },
  {
    id: 5,
    name: "Gift Box",
    image: "/images/gift-box.jpg",
    price: "₦5,000.00",
  },
  {
    id: 6,
    name: "Thigh Beads",
    image: "/images/thigh-beads.jpg",
    price: "₦22,000.00",
  },
  {
    id: 7,
    name: "Jewelry Beads",
    image: "/images/jewelry-beads.jpg",
    price: "₦30,000.00",
  },
  {
    id: 8,
    name: "Product Special",
    image: "/images/product.jpg",
    price: "₦50,000.00",
  },
];

const Product = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our Best Selling Items
      </h1>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView={2}
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        ref={swiperRef}
        className="mb-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg my-3 flex flex-col items-center hover:shadow-lg transition">
              <Image
                src={product.image}
                alt={product.name}
                className="w-30 h-20 block mx-auto object-cover rounded mb-2"
                width={130}
                height={80}
                priority
              />
              <h2 className="text-[20px] font-semibold mb-1 line-clamp-2">
                {product.name}
              </h2>
              <p className="text-pink-600 font-bold text-[18px] text-sm mb-2">
                {product.price}
              </p>
              <button className="bg-pink-600 text-[18px] hover:bg-pink-700 duration-500 flex items-center justify-center gap-3 cursor-pointer text-white px-5 w-full py-3 rounded-b-md font-medium text-xs transition-all">
                <HiShoppingCart size={20} />
                <p>Add to Cart</p>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <button className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Product;
