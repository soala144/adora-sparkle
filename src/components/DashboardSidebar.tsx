"use client";

import React from "react";
import { MdDashboard } from "react-icons/md";

const DashboardSidebar = () => {
  return (
    <div className="h-fit mb-3 lg:w-[20%] py-4 pl-5 md:w-[35%] bg-white rounded-lg hidden md:block">
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-5">
          <MdDashboard size={30} />
          <p>Dashboard</p>
        </li>
        <li className="flex items-center gap-5">Orders</li>
        <li className="flex items-center gap-5">Products</li>
        <li className="flex items-center gap-5">Payments</li>
        <li className="flex items-center gap-5">Settings</li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
