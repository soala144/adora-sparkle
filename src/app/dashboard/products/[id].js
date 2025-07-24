"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const EditProductPage = ({ params }) => {
  // In a real app, fetch product by ID from backend
  // For now, get from query params or dummy
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params?.id || searchParams.get("id");
  const name = searchParams.get("name") || "";
  const stock = searchParams.get("stock") || "";
  const price = searchParams.get("price") || "";
  const imageUrl = searchParams.get("imageUrl") || "";
  const status = searchParams.get("status") || "";

  const [form, setForm] = useState({ name, stock, price, imageUrl, status });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // In real app, update product in backend
    alert("Product updated! (dummy)");
    router.back();
  };

  return (
    <div className="bg-[#F8F7FC] w-full min-h-screen p-8 flex flex-col items-center">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-pink-600">Edit Product</h1>
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={form.name}
              width={128}
              height={128}
              className="rounded-lg object-cover h-32 w-32 mx-auto"
            />
          )}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleInput}
            className="border rounded-lg px-4 py-2 focus:outline-pink-600"
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={form.stock}
            onChange={handleInput}
            className="border rounded-lg px-4 py-2 focus:outline-pink-600"
            required
            min="0"
          />
          <input
            type="text"
            name="price"
            placeholder="Price (e.g. ₦10,000.00)"
            value={form.price}
            onChange={handleInput}
            className="border rounded-lg px-4 py-2 focus:outline-pink-600"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-pink-700 transition mt-2"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
