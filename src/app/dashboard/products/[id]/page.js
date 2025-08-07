"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams, useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const params = useParams(); // ✅ Use useParams instead of destructuring props
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = params?.id;
  const [product, setProduct] = useState({
    id: "",
    name: "",
    stock: "",
    inStock: "",
    price: "",
    imageUrl: "",
    status: "",
  });
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [form, setForm] = useState(product);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
        setForm(data);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/products/edit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...form }),
    });
    setLoading(false);
    setShowEdit(false);
    if (res.ok) {
      toast.success("Product updated!");
      router.refresh();
    } else {
      toast.error("Failed to update product.");
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    const res = await fetch(`/api/products/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setLoading(false);
    setShowDelete(false);
    if (res.ok) {
      toast.success("Product deleted!");
      router.push("/dashboard/products");
    } else {
      toast.error("Failed to delete product.");
    }
  };

  return (
    <div className="bg-[#F8F7FC] w-full min-h-screen p-8 flex flex-col items-center">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-pink-700 text-center">
          {product.name}
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={180}
              height={180}
              className="rounded-xl object-cover h-44 w-44 border-2 border-gray-200 shadow"
            />
          )}
          <div className="flex-1 w-full">
            <div className="text-xl font-semibold text-gray-800 mb-2">
              Price:{" "}
              <span className="font-mono">
                {typeof product.price === "number"
                  ? `₦${product.price.toLocaleString()}`
                  : product.price && !isNaN(Number(product.price))
                  ? `₦${Number(product.price).toLocaleString()}`
                  : product.price}
              </span>
            </div>
            <div className="text-lg text-gray-700 mb-2">
              Stock:{" "}
              <span className="font-bold">
                {product.inStock ?? product.stock ?? ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {Number(product.stock ?? product.stock ?? 0) > 0 ? (
                <span className="px-4 py-2 rounded-lg text-white font-bold bg-green-600">
                  In Stock
                </span>
              ) : (
                <span className="px-4 py-2 rounded-lg text-white font-bold bg-red-600">
                  Out of Stock
                </span>
              )}
            </div>
            <div className="mt-2">
              <span
                className={`px-4 py-1 rounded-full text-sm font-bold ${
                  product.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition"
            onClick={() => setShowEdit(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition"
            onClick={() => setShowDelete(true)}
          >
            Delete
          </button>
        </div>
        {/* Edit Modal */}
        {showEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowEdit(false)}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-blue-600">
                Edit Product
              </h2>
              <form onSubmit={handleEdit} className="flex flex-col gap-4">
                <label className="font-medium">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    className="border rounded-lg px-4 py-2 w-full mt-1"
                    required
                  />
                </label>
                <label className="font-medium">
                  Stock
                  <input
                    type="number"
                    name="inStock"
                    value={form.inStock ?? ""}
                    onChange={(e) =>
                      setForm({ ...form, inStock: Number(e.target.value) })
                    }
                    className="border rounded-lg px-4 py-2 w-full mt-1"
                    required
                    min="0"
                  />
                </label>
                <label className="font-medium">
                  Price
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleInput}
                    className="border rounded-lg px-4 py-2 w-full mt-1"
                    required
                    min="0"
                  />
                </label>
                <label className="font-medium">
                  Image URL
                  <input
                    type="text"
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={handleInput}
                    className="border rounded-lg px-4 py-2 w-full mt-1"
                  />
                </label>
                <label className="font-medium">
                  Status
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleInput}
                    className="border rounded-lg px-4 py-2 w-full mt-1"
                  >
                    <option value="Active">Active</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition mt-2"
                  disabled={
                    loading || JSON.stringify(form) === JSON.stringify(product)
                  }
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </form>
            </div>
          </div>
        )}
        {/* Delete Modal */}
        {showDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowDelete(false)}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-red-600">
                Delete Product
              </h2>
              <p className="mb-6">
                Are you sure you want to delete{" "}
                <span className="font-bold">{product.name}</span>?
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-gray-300 text-black px-6 py-2 rounded-full font-bold shadow hover:bg-gray-400 transition"
                  onClick={() => setShowDelete(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductDetailsPage;
