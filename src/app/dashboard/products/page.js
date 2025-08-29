"use client";

import DashboardProducts from "../../../components/DashboardProducts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
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
        console.log("🔍 Fetching products from /api/products...");
        const res = await fetch("/api/products");

        if (!res.ok) {
          const errorText = await res.text();
          console.error("❌ Server Error:", res.status, errorText);
          throw new Error(`Server error: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        console.log("✅ Products fetched successfully:", data);

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          console.warn("⚠️ Unexpected response format:", data);
          setProducts([]);
        }
      } catch (err) {
        console.error("❌ Fetch Error:", err);
        // You could set an error state here to show to the user
      } finally {
        setLoading(false);
      }
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
    <div className="min-h-screen bg-white p-4 sm:p-4 lg:p-6">
      {/* Header Section */}
      <div className="mb-4 sm:mb-6 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Products
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Manage your product inventory and catalog
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-white bg-gray-900 rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 w-full sm:w-auto transform hover:scale-105"
          >
            <span className="mr-2 text-lg">+</span>
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div
          className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Total Products
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {products.length}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                In Stock
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {products.filter((p) => (p.inStock || p.stock || 0) > 0).length}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Out of Stock
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-600">
                {
                  products.filter((p) => (p.inStock || p.stock || 0) === 0)
                    .length
                }
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-red-100 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Categories
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {new Set(products.map((p) => p.category)).size}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "600ms" }}
      >
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            Product Inventory
          </h2>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-6 sm:p-8">
              <Loader />
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <DashboardProducts products={products} />
            </table>
          )}
        </div>
      </div>

      {/* Enhanced Modal for adding product */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-t-lg px-4 sm:px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Add New Product
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <form
              onSubmit={handleAddProduct}
              className="p-4 sm:p-6 space-y-4 sm:space-y-6"
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-2 block">
                    Category
                  </span>
                  <select
                    name="category"
                    value={form.category || "waistbeads"}
                    onChange={handleInput}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 bg-white"
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
                  <span className="text-sm font-medium text-gray-700 mb-2 block">
                    Product Image
                  </span>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors duration-200">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImage}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {form.imageUrl ? (
                        <div className="space-y-2">
                          <Image
                            src={form.imageUrl}
                            alt="Preview"
                            className="mx-auto h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg border-2 border-gray-200"
                            width={96}
                            height={96}
                            priority
                          />
                          <p className="text-sm text-gray-600">
                            Click to change image
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <svg
                            className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-sm text-gray-600">
                            Click to upload image
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={handleInput}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 placeholder-gray-400"
                  required
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock Quantity"
                  value={form.stock}
                  onChange={handleInput}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 placeholder-gray-400"
                  required
                  min="0"
                />

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInput}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 placeholder-gray-400 resize-none"
                  placeholder="Describe the product..."
                  rows={4}
                  required
                />

                <input
                  type="text"
                  name="price"
                  placeholder="Price (e.g. ₦10,000.00)"
                  value={form.price}
                  onChange={handleInput}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 placeholder-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
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
