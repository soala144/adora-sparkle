"use client";

import DashboardProducts from "@/components/DashboardProducts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const initialProducts = [
  {
    id: "PRD-001",
    name: "Kouya Waist Bead",
    stock: 12,
    price: "₦77,900.00",
    status: "Active",
    imageUrl: "/images/waist-beads.jpg",
  },
  {
    id: "PRD-002",
    name: "Classic Bracelet",
    stock: 5,
    price: "₦25,000.00",
    status: "Active",
    imageUrl: "/images/bracelets.jpg",
  },
  {
    id: "PRD-003",
    name: "Elegant Anklet",
    stock: 0,
    price: "₦18,500.00",
    status: "Out of Stock",
    imageUrl: "/images/anklets.jpg",
  },
  {
    id: "PRD-004",
    name: "Phone Charm",
    stock: 8,
    price: "₦10,000.00",
    status: "Active",
    imageUrl: "/images/phone-charms.jpg",
  },
];

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    stock: "",
    price: "",
    image: null,
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/products");
        const text = await res.text();
        if (!res.ok) {
          console.error("Server Error:", text);
          setLoading(false);
          return;
        }
        if (!text) {
          console.warn("Empty response from /api/products");
          setLoading(false);
          return;
        }
        const data = JSON.parse(text);
        setProducts(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      // 1. Upload image first
      let imageUrl = form.imageUrl;
      if (form.image) {
        const formData = new FormData();
        formData.append("file", form.image);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");
        imageUrl = data.url;
      }

      // 2. Send product data to backend
      const productData = {
        name: form.name,
        description: form.description,
        price: Number(form.price),
        images: imageUrl, // send as 'images' string to match backend
        inStock: Number(form.stock),
        category: form.category,
      };
      const res2 = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      const newProduct = await res2.json();
      if (!res2.ok)
        throw new Error(newProduct.error || "Product creation failed");

      setProducts((prev) => [...prev, newProduct]);
      setShowModal(false);
      setForm({
        name: "",
        stock: "",
        price: "",
        image: null,
        description: "",
        imageUrl: "",
        category: "waistbeads",
      });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
      <div className="flex  items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-pink-600 tracking-tight">
          Products
        </h1>
        <button
          className="bg-pink-600 px-2 py-2 text-white md:px-6 md:py-2 rounded-full md:font-bold shadow hover:bg-pink-700 transition"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>
      <div className="bg-white rounded-xl p-2 md:p-8 shadow-lg overflow-x-auto">
        {loading ? (
          <Loader />
        ) : (
          <table className="min-w-full table-fixed text-left border-separate border-spacing-y-2 border-spacing-x-0 text-xs md:text-sm">
            <colgroup>
              <col className="w-16" />
              <col className="w-32" />
              <col className="w-20" />
              <col className="w-24" />
              <col className="w-28" />
            </colgroup>
            <thead>
              <tr className="text-gray-700 text-xs md:text-sm uppercase">
                <th className="py-3 px-2 md:px-4 text-center whitespace-nowrap">
                  Image
                </th>
                <th className="py-3 px-2 md:px-4 text-left whitespace-nowrap">
                  Name
                </th>
                <th className="py-3 px-2 md:px-4 text-center whitespace-nowrap">
                  Stock
                </th>
                <th className="py-3 px-2 md:px-4 text-right whitespace-nowrap">
                  Price
                </th>
                <th className="py-3 px-2 md:px-4 text-center whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <DashboardProducts products={products} />
          </table>
        )}
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
                  Category
                </span>
                <select
                  name="category"
                  value={form.category || "waistbeads"}
                  onChange={handleInput}
                  className="border rounded-lg px-4 py-2 focus:outline-pink-600"
                  required
                >
                  <option value="waistbeads">Waistbeads</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="anklets">Anklets</option>
                  <option value="phonecharms">Phone Charms</option>
                  <option value="thighbeads">Thigh Beads</option>
                  <option value="jewelries">Jewelries</option>
                  <option value="giftbox">Gift Box</option>
                </select>
              </label>
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
                    width={192}
                    height={192}
                    priority
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
              <textarea
                name="description"
                value={form.description}
                onChange={handleInput}
                className="border rounded-lg px-4 py-6"
                placeholder="Describe the product..."
                required
              ></textarea>
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
