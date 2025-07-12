import React from "react";

const products = [
  {
    id: 1,
    name: "Kouya Waist Bead",
    image: "/images/waist-beads.jpg",
    price: "₦77,900.00",
  },
  {
    id: 2,
    name: "Classic Bracelet",
    image: "/images/bracelets.jpg",
    price: "₦25,000.00",
  },
  {
    id: 3,
    name: "Elegant Anklet",
    image: "/images/anklets.jpg",
    price: "₦18,500.00",
  },
  {
    id: 4,
    name: "Phone Charm",
    image: "/images/phone-charms.jpg",
    price: "₦10,000.00",
  },
  {
    id: 5,
    name: "Gift Box",
    image: "/images/gift-box.jpg",
    price: "₦5,000.00",
  },
  {
    id: 6,
    name: "Thigh Beads",
    image: "/images/thigh-beads.jpg",
    price: "₦22,000.00",
  },
  {
    id: 7,
    name: "Jewelry Beads",
    image: "/images/jewelry-beads.jpg",
    price: "₦30,000.00",
  },
  {
    id: 8,
    name: "Product Special",
    image: "/images/product.jpg",
    price: "₦50,000.00",
  },
];

const Product = () => {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our Best Selling Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow flex flex-col items-center p-2 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded mb-2"
            />
            <h2 className="text-base font-semibold mb-1 text-center line-clamp-2">{product.name}</h2>
            <p className="text-pink-600 font-bold text-sm mb-2">{product.price}</p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full font-medium text-xs transition">Buy Now</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Product;
