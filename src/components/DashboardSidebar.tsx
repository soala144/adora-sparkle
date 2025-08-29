"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag } from "react-icons/fa";
import { MdDashboard, MdShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";

const sidebarLinks = [
  { label: "Dashboard", icon: <MdDashboard size={20} />, href: "/dashboard" },
  {
    label: "Orders",
    icon: <MdShoppingCart size={20} />,
    href: "/dashboard/orders",
  },
  {
    label: "Products",
    icon: <FaShoppingBag size={20} />,
    href: "/dashboard/products",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-24 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:shadow-none border-r border-gray-200 lg:border-none transform transition-transform duration-300 ease-in-out lg:transition-none`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    isActive
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <span
                    className={`${isActive ? "text-white" : "text-gray-500"}`}
                  >
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Settings Section */}
          <div
            className="p-4 border-t border-gray-200 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="px-3 py-2.5 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <IoMdSettings size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Settings</p>
                  <p className="text-xs text-blue-600">Manage your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
