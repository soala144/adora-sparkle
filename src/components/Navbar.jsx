"use client";

import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaNewspaper,
  FaSearch,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <nav className="z-50 fixed top-0 w-screen">
        <div className="flex items-center justify-between bg-gray-200 px-4 h-16 text-black">
          {/* Logo */}
          <figure className="h-14 w-14 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-semibold hover:text-gray-600 ${
                    pathname === item.href
                      ? "underline underline-offset-4 text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Search, Cart, Hamburger */}
          <div className="flex items-center gap-4">
            <FaSearch
              size={20}
              onClick={toggleSearch}
              className="cursor-pointer"
            />

            {/* Cart Icon */}
            <Link href="/cart" className="text-xl pr-2">
              <FaShoppingCart size={30} />
            </Link>

            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Slide-out Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-[#1F2937] bg-opacity-40 z-40 flex justify-start">
              <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                <div
                  className="bg-gray-200 h-full p-6 flex flex-col justify-between animate-slide-in"
                  style={{ width: "85vw", maxWidth: "500px" }}
                >
                  <div>
                    {/* Mobile Logo Row */}
                    <div className="flex justify-between items-center mb-6">
                      <figure className="h-14 w-14 rounded-full overflow-hidden border-2 border-gray-300">
                        <img
                          src="/images/logo.jpg"
                          alt="Logo"
                          className="h-full w-full object-cover"
                        />
                      </figure>
                      <FaTimes
                        size={24}
                        className="cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      />
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-6 text-lg">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`block ${
                              pathname === item.href
                                ? "text-black font-bold"
                                : "text-gray-700"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter Button */}
                  <button
                    className="mt-10 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#9D1D20] via-[#B22222] to-[#80171A] text-white px-6 py-3 rounded-full shadow hover:bg-[#80171a] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    NewsLetter <FaNewspaper />
                  </button>
                </div>
              </OutsideClickHandler>
            </div>
          )}
        </div>
      </nav>

      {showSearch && (
        <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Top bar: input + close */}
            <div className="flex items-center justify-between border-b border-gray-400 pb-2 mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for accessories..."
                className="text-2xl font-medium outline-none w-full"
              />
              <div className="flex items-center gap-4">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-gray-500 hover:underline"
                  >
                    Clear
                  </button>
                )}
                <FaTimes
                  size={22}
                  className="cursor-pointer text-gray-600"
                  onClick={() => setShowSearch(false)}
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 text-gray-400 font-medium mb-6 text-lg">
              <button className="text-black border-b-2 border-black pb-1">
                Products
              </button>
              <button>Collections</button>
            </div>

            {/* Example Search Results */}
            <div className="flex flex-col gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img
                    src="/images/waist-beads.jpg"
                    alt="Bead"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {i === 0 ? "Kouya" : "Dioula"} – Single Strand Waist Bead
                    </h3>
                    <p className="text-gray-700 font-medium">₦77,900.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
