"use client";

import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { FaBars, FaTimes, FaShoppingCart, FaNewspaper } from "react-icons/fa";

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
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="z-50 fixed top-0 w-screen">
      <div className="flex items-center justify-between bg-gray-200 px-4 h-16 text-black">
        <figure className="h-14 w-14  rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </figure>

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

        <div className="flex items-center gap-4">
          <Link href="/cart" className="text-xl pr-2">
            <FaShoppingCart size={30} />
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-[#1F2937] bg-opacity-40 z-40 flex justify-start">
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
              <div
                className="bg-gray-200 h-full p-6 flex flex-col justify-between animate-slide-in-left"
                style={{ width: "85vw", maxWidth: "500px" }}
              >
                <div>
                  {/* Top Row */}
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

                  {/* Menu Links */}
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

                {/* Apply Button */}
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
  );
};

export default Navbar;
