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
};

const DashboardProducts = ({ products }: { products: ProductType[] }) => {
  const statusColors = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
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

  return (
    <tbody>
      {products.map((product: ProductType) => (
        <tr
          key={product.id}
          className="bg-gray-50 hover:bg-pink-50 transition rounded-lg"
        >
          <td className="py-3 px-2 w-16 min-w-[56px] text-center align-middle">
            {(product.images ?? product.imageUrl) ? (
              <Image
                src={getSafeImageUrl(
                  (product.images ?? product.imageUrl) as string,
                  "https://via.placeholder.com/48x48?text=Image",
                  ["res.cloudinary.com", "via.placeholder.com", "example.com"]
                )}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-lg object-cover h-12 w-12 mx-auto"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/48x48?text=Image";
                }}
              />
            ) : (
              <span className="text-gray-400 text-xs">No image</span>
            )}
          </td>
          <td className="py-3 px-2 font-semibold break-words max-w-[140px] align-middle text-left whitespace-nowrap">
            {product.name}
          </td>
          <td className="py-3 px-2 text-center font-mono min-w-[60px] align-middle whitespace-nowrap">
            {product.inStock !== undefined
              ? product.inStock
              : (product.stock ?? 0)}
          </td>
          <td className="py-3 px-2 font-bold text-pink-600 align-middle text-right min-w-[80px] whitespace-nowrap">
            {formatPrice(product.price)}
          </td>
          <td className="py-3 px-2 align-middle text-center min-w-[80px]">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
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
          <td className="py-3 px-2 align-middle text-center min-w-[100px]">
            <a
              href={`/dashboard/products/${product.id}`}
              className="inline-block px-4 py-2 bg-[#9D1D20] text-white rounded-full hover:bg-[#80171A] transition"
            >
              View More
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashboardProducts;
