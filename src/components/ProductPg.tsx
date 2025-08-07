"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { HiShoppingCart } from "react-icons/hi";

// icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { products } from "../data/product";
// Swiper packages
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const ProductPg = () => {
  const { addToCart } = useCart();

  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [index, setIndex] = useState<number | null>(null);
  const [shouldNavigateBead, setShouldNavigateBead] = useState<boolean>(false);
  const swiperRef0 = useRef<any>(null);
  const swiperRef1 = useRef<any>(null);
  const swiperRef2 = useRef<any>(null);
  const swiperRef3 = useRef<any>(null);
  const swiperRef4 = useRef<any>(null);
  const swiperRef5 = useRef<any>(null);
  const swiperRef6 = useRef<any>(null);
  // const swiper = useSwiper();

  const categories: string[] = [
    "waist beads",
    "bracelets",
    "anklets",
    "phone charms",
    "thigh beads",
    "jewelries",
    "gift box",
  ];

  const handleMouseEvent = (action: string, i: number) => {
    if (action.toLowerCase() === "enter") {
      setIndex(i);
      return;
    }
    setIndex(i);
    return;
  };

  return (
    <div className="pt-20 mx-auto">
      <h1 className="text-3xl lg:text-5xl text-center font-bold mt-10">
        Product Page
      </h1>
      <h2 className="mb-9 lg:mb- text-center mt-5 text-md lg:text-2xl text-gray-400">
        Check out some of our best products
      </h2>
      {/* swipers for desktop apps. */}
      <div className="ml-auto w-[95%] mr-3 relative max-[640px]:hidden">
        <div className="">
          {categories.map((item, i) => {
            const swiperRef =
              i === 0
                ? swiperRef0
                : i === 1
                  ? swiperRef1
                  : i === 2
                    ? swiperRef2
                    : i === 3
                      ? swiperRef3
                      : i === 4
                        ? swiperRef4
                        : i === 5
                          ? swiperRef5
                          : swiperRef6;
            return (
              <div
                key={i}
                className="mb-10"
                onMouseEnter={() => handleMouseEvent("enter", i)}
                onMouseLeave={() => handleMouseEvent("leave", i)}
              >
                <h2 className="font-semibold capitalize text-[#ff66d1] text-[30px] mb-5">
                  {item}
                </h2>
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
                >
                  {products.map((product, i) => (
                    <SwiperSlide
                      className="bg-white max-[410px]:mt-3 rounded-lg my-3 cursor-pointer flex flex-col items-center hover:shadow-lg transition"
                      key={i}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-30 h-20 block mx-auto object-cover rounded mb-2"
                        width={130}
                        height={80}
                        priority
                      />
                      <h2 className="text-[20px] font-semibold w-[95%] text-center truncate mb-1 line-clamp-2">
                        {product.name}
                      </h2>
                      <p className="text-[#ff66d1] font-bold text-center text-[18px] text-sm mb-2">
                        {product.price}
                      </p>
                      <button
                        className="bg-[#ff66d1] text-[18px] hover:bg-pink-700 duration-500 flex items-center justify-center gap-3 cursor-pointer text-white px-5 w-full py-3 rounded-b-md font-medium text-xs transition-all"
                        onClick={() =>
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: Number(product.price.replace(/[^\d.]/g, "")),
                            img: product.image,
                            quantity: 1,
                            color: product.color,
                            size: product.size,
                          })
                        }
                      >
                        <HiShoppingCart size={20} />
                        <p>Add to Cart</p>
                      </button>
                    </SwiperSlide>
                  ))}
                  <button
                    className={`shadow-lg absolute top-1/2 right-3 z-50 bg-white size-10 rounded-full cursor-pointer text-[#ff66d1] hover:text-white flex items-center justify-center hover:bg-[#ff66d1] transform -translate-y-0.5 ${
                      i === index ? "" : "hidden"
                    }`}
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <FaArrowRight />
                  </button>
                  <button
                    className={`shadow-lg absolute top-1/2 overflow-hidden left-3 cursor-pointer text-[#ff66d1] hover:text-white z-50 bg-white size-10 rounded-full flex items-center justify-center hover:bg-[#ff66d1] transform -translate-y-0.5 ${
                      i === index ? "" : "hidden"
                    }`}
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <FaArrowLeft />
                  </button>
                </Swiper>
                <button className="bg-[#ff66d1] rounded-md py-3 px-7 text-white hover:bg-pink-300 duration-500 transition-all cursor-pointer mx-auto block">
                  View more of <span className="capitalize">{item}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] mx-auto min-[640px]:hidden">
        {categories.map((item, i) => (
          <div key={i}>
            <h2 className="my-6 text-pink-600 text-2xl text-center capitalize font-semibold">
              {item}
            </h2>
            <div className="grid-cols-2 min-[500px]:grid-cols-3 gap-4 grid">
              {products.slice(0, 6).map((product, i) => (
                <div
                  className="bg-white max-[410px]:mt-3 rounded-lg my-3 cursor-pointer flex flex-col items-center hover:shadow-lg transition"
                  key={i}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-30 h-20 block mx-auto object-cover rounded mb-2"
                    width={130}
                    height={80}
                    priority
                  />
                  <h2 className="text-[20px] font-semibold w-[95%] text-center truncate mb-1 line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-[#ff66d1] font-bold text-center text-[18px] text-sm mb-2">
                    {product.price}
                  </p>
                  <button
                    className="bg-[#ff66d1] min-[350px]:text-[18px] hover:bg-pink-700 duration-500 flex items-center justify-center gap-3 cursor-pointer text-white px-5 w-full py-3 rounded-b-md font-medium text-xs transition-all"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: Number(product.price.replace(/[^\d.]/g, "")),
                        img: product.image,
                        size: product.size,
                        color: product.color,
                        quantity: 1,
                      })
                    }
                  >
                    <HiShoppingCart size={20} />
                    <p>Add to Cart</p>
                  </button>
                </div>
              ))}
            </div>
            <button className="w-fit bg-pink-600 mx-auto block my-3 text-white py-2 px-3 rounded-md">
              View more <span className="capitalize">{item}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPg;
