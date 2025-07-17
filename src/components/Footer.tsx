"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <figure className="h-14 w-14 mb-4 rounded-full overflow-hidden border-2 border-pink-500">
            <Image
              src="/images/logo.jpg"
              alt="Adora Sparkles"
              className="w-full h-full object-cover"
              width={56}
              height={56}
              priority
            />
          </figure>
          <p className="text-sm text-gray-400">
            Adora Sparkles crafts beautiful, handmade accessories that empower
            and beautify every soul ✨.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/guide">Order Guide</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm text-gray-400 mb-2">adorasparkles@gmail.com</p>
          <p className="text-sm text-gray-400 mb-2">
            WhatsApp: +234-814-821-9109
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="hover:text-pink-500" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} className="hover:text-pink-500" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={20} className="hover:text-pink-500" />
            </a>
            <a href="mailto:adorasparkles@gmail.com">
              <FaEnvelope size={20} className="hover:text-pink-500" />
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Be the first to know about our latest drops, restocks, and offers!
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-gray-200 border border-white outline-none"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition py-2 rounded text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Adora Sparkles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
