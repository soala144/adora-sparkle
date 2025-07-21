"use client";

import Image from "next/image";
import React from "react";

import { useState } from "react";

const initialProducts = [
  {
    id: "PRD-001",
    name: "Kouya Waist Bead",
    stock: 12,
    price: "₦77,900.00",
    status: "Active",
  },
  {
    id: "PRD-002",
    name: "Classic Bracelet",
    stock: 5,
    price: "₦25,000.00",
    status: "Active",
  },
  {
    id: "PRD-003",
    name: "Elegant Anklet",
    stock: 0,
    price: "₦18,500.00",
    status: "Out of Stock",
  },
  {
    id: "PRD-004",
    name: "Phone Charm",
    stock: 8,
    price: "₦10,000.00",
    status: "Active",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  "Out of Stock": "bg-red-100 text-red-700",
};

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    stock: "",
    price: "",
    image: null,
    imageUrl: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        image: file,
        imageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.stock || !form.price) return;
    setProducts([
      ...products,
      {
        id: `PRD-${products.length + 1}`,
        name: form.name,
        stock: Number(form.stock),
        price: form.price,
        status: Number(form.stock) > 0 ? "Active" : "Out of Stock",
        imageUrl: form.imageUrl,
      },
    ]);
    setForm({ name: "", stock: "", price: "", image: null, imageUrl: "" });
    setShowModal(false);
  };

  return (
    <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-pink-600 tracking-tight">
          Products
        </h1>
        <button
          className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-pink-700 transition"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-700 text-sm uppercase">
              <th className="py-2">Product ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Stock</th>
              <th className="py-2">Price</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-gray-50 hover:bg-pink-50 transition rounded-lg"
              >
                <td className="py-3 px-2 font-semibold text-pink-600">
                  {product.id}
                </td>
                <td className="py-3 px-2">{product.name}</td>
                <td className="py-3 px-2">{product.stock}</td>
                <td className="py-3 px-2 font-bold">{product.price}</td>
                <td className="py-3 px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      statusColors[product.status]
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding product */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-pink-600">
              Add New Product
            </h2>
            <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
              <label className="block">
                <span className="text-gray-700 text-sm mb-1 block">
                  Product Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="border rounded-lg px-4 py-2 focus:outline-pink-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700"
                />
                {form.imageUrl && (
                  <Image
                    src={form.imageUrl}
                    alt="Preview"
                    className="mt-2 h-24 w-24 object-cover rounded-lg border"
                  />
                )}
              </label>
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
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
