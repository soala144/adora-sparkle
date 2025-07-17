"use client";
import React from "react";
import { type CartItems } from "./Cart";
import Image from "next/image";

const Checkout = () => {
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

  const deliveryFee: number | null = null;
  const sub = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="pt-20 w-[90%] mx-auto max-w-[1440px] lg:text-2xl">
      <h1 className="uppercase lg:capitalize text-3xl lg:text-4xl text-center font-bold my-10">
        Billing Details
      </h1>
      <form action="" className="min-[1240px]:flex min-[1240px]:gap-[120px]">
        <div className="flex mb-10 flex-col gap-8 min-[1240px]:mb-[140px]">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="leading-[24px] font-medium">
              Full Name<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailAddress"
              className="leading-[24px] font-medium"
            >
              Email<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="leading-[24px] font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="leading-[24px] font-medium">
              Street Address<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="street"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="town/city" className="leading-[24px] font-medium">
              Town/City<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="town/city"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="telNum" className="leading-[24px] font-medium">
              Phone Number<span className="text-red-700">*</span>
            </label>
            <input
              type="number"
              name="telNum"
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            />
          </div>
        </div>
        <div className="lg:w-[490px]">
          <div className="flex flex-col gap-8">
            {cartItems.map((item, i) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="w-[80%] flex items-center gap-2">
                  <Image
                    src={item.img}
                    alt=""
                    className="size-14"
                    width={192}
                    height={192}
                    priority
                  />
                  <p className="max-w-full font-medium truncate">{item.name}</p>
                </div>
                <p>{item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="border-b-2  py-3 px-2 border-b-gray-400 flex items-center justify-between">
              <p>Subtotal</p>
              <p>&#8358;{sub.toLocaleString()}</p>
            </div>
            <div className="border-b-2  py-3 px-2 border-b-gray-400 flex items-center justify-between">
              <p>Delivery fee</p>
              <p>{deliveryFee ?? "Free"}</p>
            </div>
            <div className="py-3 px-2 flex items-center justify-between">
              <p>Total</p>
              <p>&#8358;{(sub - (deliveryFee ?? 0)).toLocaleString()}</p>
            </div>
            <button className="text-center h-12 bg-[#ff66d1] w-full text-white mb-[100px] lg:mb-0 rounded">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
