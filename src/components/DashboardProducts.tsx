import Image from "next/image";
import React from "react";
import { getSafeImageUrl } from "../utils/imageUtils";

type ProductType = {
  id: string;
  name: string;
  price: number | string;
  images?: string;
  imageUrl?: string;
  inStock?: number;
  stock?: number;
  status?: string;
  category?: string;
};

const DashboardProducts = ({ products }: { products: ProductType[] }) => {
  const statusColors = {
    Active: "bg-green-100 text-green-700 border-green-200",
    "Out of Stock": "bg-red-100 text-red-700 border-red-200",
  };

  console.log(products);

  // Helper for price formatting
  const formatPrice = (price: number | string) => {
    if (typeof price === "number") {
      return `₦${price.toLocaleString()}`;
    }
    // If price is a string, try to extract number and format
    const num = parseFloat(price.replace(/[^\d.]/g, ""));
    return isNaN(num) ? price : `₦${num.toLocaleString()}`;
  };

  // Helper for category formatting
  const formatCategory = (category: string) => {
    if (!category) return "N/A";
    return (
      category.charAt(0).toUpperCase() +
      category.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <tbody className="divide-y divide-gray-200">
      {products.map((product: ProductType) => (
        <tr
          key={product.id}
          className="bg-white hover:bg-gray-50 transition-colors duration-150"
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12">
                {(product.images ?? product.imageUrl) ? (
                  <Image
                    src={getSafeImageUrl(
                      (product.images ?? product.imageUrl) as string,
                      "https://via.placeholder.com/48x48?text=Image",
                      [
                        "res.cloudinary.com",
                        "via.placeholder.com",
                        "example.com",
                      ]
                    )}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-cover border border-gray-200"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/48x48?text=Image";
                    }}
                  />
                ) : (
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
                <div className="text-sm text-gray-500">
                  {formatCategory(product.category || "")}
                </div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {formatCategory(product.category || "")}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center">
            <span className="text-sm font-medium text-gray-900">
              {product.inStock !== undefined
                ? product.inStock
                : (product.stock ?? 0)}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-right">
            <span className="text-sm font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                statusColors[
                  (product.status ??
                    ((product.inStock ?? 0) > 0
                      ? "Active"
                      : "Out of Stock")) as "Active" | "Out of Stock"
                ]
              }`}
            >
              {product.status ??
                ((product.inStock ?? 0) > 0 ? "Active" : "Out of Stock")}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center">
            <div className="flex items-center justify-center space-x-2">
              <a
                href={`/dashboard/products/${product.id}`}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150"
              >
                <svg
                  className="h-4 w-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View
              </a>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150">
                <svg
                  className="h-4 w-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashboardProducts;
