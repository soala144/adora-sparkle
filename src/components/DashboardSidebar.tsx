"use client";

import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";

const DashboardSidebar = () => {
  return (
    <div className="h-fit mb-3 lg:w-[20%] py-4 pl-5 md:w-[35%] bg-white rounded-lg hidden md:block">
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3 pl-3 py-2 rounded-md text-[#ff66d1] w-[90%] shadow-lg">
          <MdDashboard size={18} />
          <p>Dashboard</p>
        </li>
        <li className="cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3  pl-3 py-2">
          <MdShoppingCart size={18} />
          <p>Orders</p>
        </li>
        <li className="cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3  pl-3 py-2">
          <FaShoppingBag size={18} />
          <p>Products</p>
        </li>
        <li className="cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3 pl-3 py-2">
          <TiCreditCard size={18} />
          <p>Payments</p>
        </li>
        <li className="cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3  pl-3 py-2">
          <IoMdSettings size={18} />
          <p>Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
