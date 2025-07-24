"use client";

import React from "react";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();
  const category = params?.category?.replace(/-/g, " ");

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 capitalize">
        {category} Products
      </h1>
      <div className="bg-white rounded-xl p-8 shadow text-gray-600">
        <p>
          Display products for{" "}
          <span className="font-bold text-black">{category}</span> here.
          (Connect to backend or filter products by category.)
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
