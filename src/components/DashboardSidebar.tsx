"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";

const sidebarLinks = [
  { label: "Dashboard", icon: <MdDashboard size={18} />, href: "/dashboard" },
  {
    label: "Orders",
    icon: <MdShoppingCart size={18} />,
    href: "/dashboard/orders",
  },
  {
    label: "Products",
    icon: <FaShoppingBag size={18} />,
    href: "/dashboard/products",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-fit mb-3 lg:w-[20%] py-4 pl-5 md:w-[35%] bg-white rounded-lg hidden md:block">
      <ul className="flex flex-col gap-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.label}
              className={`flex items-center gap-3 pl-3 py-2 rounded-md w-[90%] cursor-pointer transition shadow-lg ${
                isActive
                  ? "bg-[#ff66d1]/10 text-[#ff66d1]"
                  : "hover:text-[#fb8ad9] text-gray-700"
              }`}
            >
              <Link
                href={link.href}
                className="flex items-center gap-3 w-full h-full"
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
