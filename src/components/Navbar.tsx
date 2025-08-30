"use client";

import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import {
  IoCartOutline,
  IoSearchOutline,
  IoMenuOutline,
  IoClose,
} from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Order Guide", href: "/guide" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const { cart } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <nav className="z-50 fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <figure className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src="/images/logo.jpg"
                alt="Adora Sparkles Logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                Adora Sparkles
              </h1>
              <p className="text-xs text-gray-600">Premium Accessories</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-all duration-300 hover:text-gray-600 relative group ${
                    pathname === item.href ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-slate-600 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Search, Cart, Hamburger */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
            >
              <IoSearchOutline
                size={24}
                className="text-gray-600 group-hover:text-gray-900"
              />
            </button>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
            >
              <IoCartOutline
                size={26}
                className="text-gray-600 group-hover:text-gray-900"
              />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-gray-600 to-slate-600 text-xs rounded-full w-6 h-6 text-white flex items-center justify-center shadow-lg font-semibold">
                  <span>
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
              )}
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              {isOpen ? (
                <IoClose size={28} className="text-gray-600" />
              ) : (
                <IoMenuOutline size={28} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
                <IoSearchOutline
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 flex justify-start">
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div
              className="bg-white h-full p-6 flex flex-col justify-between shadow-2xl animate-slide-in"
              style={{ width: "85vw", maxWidth: "400px" }}
            >
              <div>
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <figure className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/logo.jpg"
                      alt="Adora Sparkles Logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">
                      Adora Sparkles
                    </h1>
                    <p className="text-xs text-gray-600">Premium Accessories</p>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-900 border border-gray-200"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Footer */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Follow us on social media
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm">📱</span>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm">📷</span>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm">🐦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
