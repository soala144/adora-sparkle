import Image from "next/image";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ProductPg = () => {
  const products: { id: number; name: string; image: string; price: string }[] =
    [
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

  return (
    <div className="pt-20 w-[90%] mx-auto">
      <h1 className="text-3xl lg:text-5xl text-center font-bold mt-10 mb-9 lg:mb-15">
        Product Page
      </h1>
      <div className="grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 gap-3 max-[410px]:grid-cols-1">
      {products.map((product, i) => (
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
          <p className="text-pink-600 font-bold text-[18px] text-sm mb-2">
            {product.price}
          </p>
          <button className="bg-pink-600 text-[18px] hover:bg-pink-700 duration-500 flex items-center justify-center gap-3 cursor-pointer text-white px-5 w-full py-3 rounded-b-md font-medium text-xs transition-all">
            <HiShoppingCart size={20} />
            <p>Add to Cart</p>
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductPg;
