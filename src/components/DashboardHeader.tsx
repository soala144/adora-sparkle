import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMessage, FaBell } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 lg:px-8 py-6 mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, <span className="text-3xl text-black">Adora!</span>
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your store today
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <div className="absolute left-3 text-gray-400">
              <IoSearchOutline size={20} />
            </div>
            <input
              type="text"
              placeholder="Search products, orders..."
              className="pl-10 pr-4 py-2.5 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 placeholder-gray-400"
            />
          </div>

          {/* Mobile Search Icon */}
          <div className="lg:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <IoSearchOutline size={24} />
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
              <FaMessage size={20} />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full"></span>
            </button>

            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <FiUser size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
