import Image from "next/image";
import React from "react";

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
          className="bg-gray-50 hover:bg-pink-50 transition rounded-lg cursor-pointer"
          onClick={() => {
            const params = new URLSearchParams({
              id: product.id,
              name: product.name,
              stock: (product.inStock !== undefined
                ? product.inStock
                : (product.stock ?? 0)
              ).toString(),
              price:
                typeof product.price === "number"
                  ? product.price.toString()
                  : product.price,
              imageUrl: product.images ?? product.imageUrl ?? "",
              status:
                product.status ??
                ((product.inStock ?? 0) > 0 ? "Active" : "Out of Stock"),
            });
            window.location.href = `/dashboard/products/${product.id}?${params.toString()}`;
          }}
        >
          <td className="py-3 px-2 w-16 min-w-[56px] text-center align-middle">
            {(product.images ?? product.imageUrl) ? (
              <Image
                src={(product.images ?? product.imageUrl) as string}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-lg object-cover h-12 w-12 mx-auto"
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
        </tr>
      ))}
    </tbody>
  );
};

export default DashboardProducts;
