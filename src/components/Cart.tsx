"use client";
import React, { useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { GiTrashCan } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export interface CartItems {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  discount: number | null;
  img: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const cartItems: CartItems[] = [
    {
      id: 0,
      name: "waistbeads and more if you know what i am talking bout?",
      price: 80000,
      inStock: true,
      discount: 0,
      quantity: 1,
      img: "/images/bracelets.jpg",
    },
    {
      id: 2,
      name: "waistbead",
      price: 80000,
      inStock: true,
      quantity: 1,
      img: "/images/bracelets.jpg",
      discount: null,
    },
    {
      id: 1,
      name: "waistbead",
      price: 80000,
      inStock: true,
      quantity: 1,
      img: "/images/bracelets.jpg",
      discount: null,
    },
  ];

  // const cartItems: CartItems[] = [];

  const itemsCost: number = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const discountCost: number =
    (cartItems
      .map((item) => item.discount ?? 1)
      .reduce((acc, curr) => acc + curr, 0) /
      100) *
    itemsCost;
  const totalCost: number = itemsCost - discountCost;

  if (cartItems.length === 0)
    return (
      <div className="mt-30 mb-20 text-gray-500">
        <p className="text-center font-semibold text-2xl sm:text-3xl">
          Empty Cart. Kindly Add!
        </p>
        <MdShoppingCart size={150} className="block mx-auto mt-5" />
      </div>
    );

  return (
    <div className="pt-20 w-[90%] mx-auto max-w-[1440px]">
      <h1 className="text-4xl lg:text-5xl uppercase lg:capitalize font-bold text-center my-8">
        My Cart
      </h1>
      <div className="lg:flex justify-between mb-10">
        <div className="border-gray-400 border-2 w-full lg:w-[60%] py-3 rounded-xl">
          <h2 className="font-semibold py-3 text-xl lg:text-2xl border-b-2 border-b-gray-400 pl-5">
            Item ({cartItems.length})
          </h2>
          {cartItems.map((item: CartItems, i: number) => (
            <div
              key={item.id}
              className={`py-2 pl-5 relative min-h-40 ${
                i !== cartItems.length - 1 ? "border-b-2 border-b-gray-400" : ""
              }`}
            >
              <div className="min-[400px]:flex gap-3 items-center">
                <Image
                  src={item.img}
                  alt=""
                  className="sm:size-30 max-[400px]:block max-[400px]:mx-auto size-24"
                  width={192}
                  height={192}
                  priority
                />
                <div className=" w-[60%] max-[400px]:w-[94%]">
                  <p className="font-bold  truncate text-2xl capitalize">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 mb-1">
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                  <p className="max-[400px]:mb-10">&#8358;{item.price}</p>
                </div>
              </div>
              <div className="duration-500 cursor-pointer absolute bottom-0 left-5 my-3 flex gap-1/2 items-center text-[#ff66d1] hover:text-[#dd6262]">
                <GiTrashCan />
                <p className="text-xs">Remove</p>
              </div>
              <div className="lg:right-10 right-3 absolute bottom-2 lg:bottom-5 flex lg:gap-5 gap-3 items-center">
                <button className="shadow-lg rounded-md text-white cursor-pointer sm:p-2 p-1 bg-[#ff66d1]">
                  <GoPlus size={24} />
                </button>
                <p className="text-[20px]">{item.quantity}</p>
                <button className="shadow-lg rounded-md text-white cursor-pointer sm:p-2 p-1 bg-gray-400">
                  <LuMinus size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[30%] shadow rounded-lg h-fit p-5 mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold">Cart Summary</h2>
          <div className="grid mt-4 grid-cols-2">
            <p>Items Cost</p>
            <p className="text-right">{itemsCost}</p>
            <p className="my-3">Discount Cost</p>
            <p className="text-right my-3 text-red-800">
              -&#8358;{discountCost}
            </p>
            <p>Total</p>
            <p className="text-right">{totalCost}</p>
            <Link
              href="/checkout"
              className="py-3 bg-[#ff66d1] disabled:bg-[#ff66d1]/50 col-span-2 text-white rounded-xl mt-7 cursor-pointer"
            >
              <p className="text-center">Checkout Orders</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
