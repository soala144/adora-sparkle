import Image from "next/image";
import React from "react";

const DashboardProducts = ({ products }) => {
  const statusColors = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
  };
  return (
    <tbody>
      {products.map((product: any) => (
        <tr
          key={product.id}
          className="bg-gray-50 hover:bg-pink-50 transition rounded-lg cursor-pointer"
          onClick={() => {
            const params = new URLSearchParams({
              id: product.id,
              name: product.name,
              stock: product.stock.toString(),
              price: product.price,
              imageUrl: product.imageUrl || "",
              status: product.status,
            });
            window.location.href = `/dashboard/products/${
              product.id
            }?${params.toString()}`;
          }}
        >
          <td className="py-3 px-2">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-lg object-cover h-12 w-12"
              />
            ) : (
              <span className="text-gray-400 text-xs">No image</span>
            )}
          </td>
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
  );
};

export default DashboardProducts;
