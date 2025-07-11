"use client";

import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
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
    <nav className="flex items-center justify-between px-4 h-16 bg-gray-200 text-black relative z-50">
      <figure className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden border-2 border-gray-300">
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
        <Link href="/cart" className="text-xl">
          <FaShoppingCart />
        </Link>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="w-2/3 max-w-xs bg-white h-full shadow-md p-4 pt-8 animate-slide-in flex flex-col justify-start">
            <figure className="h-12 w-12 rounded-full mb-4 mx-auto">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </figure>

            <ul className="flex flex-col gap-6 text-lg font-medium">
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
