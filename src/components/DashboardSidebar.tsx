"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <MdDashboard size={18} />,
    },
    {
      href: "/dashboard/orders",
      label: "Orders",
      icon: <MdShoppingCart size={18} />,
    },
    {
      href: "/dashboard/products",
      label: "Products",
      icon: <FaShoppingBag size={18} />,
    },
    {
      href: "/dashboard/payments",
      label: "Payments",
      icon: <TiCreditCard size={18} />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: <IoMdSettings size={18} />,
    },
  ];

  return (
    <div className="h-fit mb-3 lg:w-[20%] py-4 pl-5 md:w-[35%] bg-white rounded-lg hidden md:block">
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`cursor-pointer hover:text-[#fb8ad9] flex items-center gap-3 pl-3 py-2 rounded-md ${
                  isActive ? "text-[#ff66d1] w-[90%] shadow-lg" : ""
                }`}
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
