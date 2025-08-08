import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/product";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  // Featured products (excluding current)
  const featured = products.filter((p) => p.featured && p.id !== product.id);

  return (
    <div className="max-w-4xl mt-18 mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-xl border-4 border-pink-600 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            {product.name}
          </h1>
          <p className="text-lg text-black mb-4">{product.description}</p>
          <div className="text-2xl font-bold text-black mb-6">
            {product.price}
          </div>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-pink-700 transition mb-4">
            Add to Cart
          </button>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-black mb-2">Share:</h2>
            <div className="flex gap-4">
              <a href="#" className="text-pink-600 hover:text-pink-700">
                Instagram
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                Facebook
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((fp) => (
            <Link
              key={fp.id}
              href={`/products/${fp.id}`}
              className="block bg-white border border-pink-200 rounded-xl shadow hover:scale-105 transition p-4"
            >
              <Image
                src={fp.image}
                alt={fp.name}
                width={200}
                height={200}
                className="rounded-lg mb-3 object-cover w-30 h-20 "
              />
              <h3 className="text-lg font-bold text-pink-600 mb-1">
                {fp.name}
              </h3>
              <div className="text-black font-semibold mb-2">{fp.price}</div>
              <p className="text-sm text-gray-600 mb-2">{fp.description}</p>
              <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold">
                View Details
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
