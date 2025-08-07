"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { GiTrashCan } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export interface CartItems {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  discount: number | null;
  img: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // const cartItems: CartItems[] = [];

  const itemsCost: number = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const discountCost: number = 0; // No discount logic for now
  const totalCost: number = itemsCost - discountCost;

  if (cart.length === 0)
    return (
      <div className="mt-30 mb-20 text-gray-500">
        <p className="text-center font-semibold text-2xl sm:text-3xl">
          Empty Cart. Kindly Add!
        </p>
        <MdShoppingCart size={150} className="block mx-auto mt-5" />
      </div>
    );

  return (
    <div className="pt-20 w-[90%] mx-auto max-w-[1440px] lg:text-xl">
      <h1 className="text-4xl lg:text-5xl uppercase lg:capitalize font-bold text-center my-8">
        My Cart
      </h1>
      <div className="lg:flex justify-between mb-10">
        <div className="border-gray-400 border-2 w-full lg:w-[60%] py-3 rounded-xl">
          <h2 className="font-semibold py-3 text-xl lg:text-2xl border-b-2 border-b-gray-400 pl-5">
            Item ({cart.length})
          </h2>
          {cart.map((item, i) => (
            <div
              key={item.id}
              className={`py-2 pl-5 relative min-h-40 ${
                i !== cart.length - 1 ? "border-b-2 border-b-gray-400" : ""
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
                  <p className="text-xs text-gray-400 mt-2 mb-1">In Cart</p>
                  <p className="max-[400px]:mb-10">
                    &#8358;{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <div
                className="duration-500 cursor-pointer absolute bottom-0 left-5 my-3 flex gap-1/2 items-center text-[#ff66d1] hover:text-[#dd6262]"
                onClick={() => removeFromCart(item.id)}
              >
                <GiTrashCan />
                <p className="text-xs">Remove</p>
              </div>
              <div className="lg:right-10 right-3 absolute bottom-2 lg:bottom-5 flex lg:gap-5 gap-3 items-center">
                <button
                  className="shadow-lg rounded-md text-white cursor-pointer sm:p-2 p-1 bg-[#ff66d1]"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <GoPlus size={24} />
                </button>
                <p className="text-[20px]">{item.quantity}</p>
                <button
                  className="shadow-lg rounded-md text-white cursor-pointer sm:p-2 p-1 bg-gray-400"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  <LuMinus size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[30%] shadow rounded-lg h-fit p-5 mt-6 lg:mt-0 lg:text-xl">
          <h2 className="text-xl font-semibold">Cart Summary</h2>
          <div className="grid mt-4 grid-cols-2">
            <p>Items Cost</p>
            <p className="text-right">&#8358;{itemsCost.toLocaleString()}</p>

            <p>Total</p>
            <p className="text-right">&#8358;{totalCost.toLocaleString()}</p>
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
