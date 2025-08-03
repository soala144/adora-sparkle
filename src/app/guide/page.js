"use client";

import React from "react";
import {
  FaShoppingCart,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    title: "1. Browse Products",
    icon: <FaClipboardList className="text-pink-600 text-3xl" />,
    description:
      "Explore our wide collection of waist beads, bracelets, anklets, phone charms, and more from the products page.",
  },
  {
    title: "2. Add to Cart",
    icon: <FaShoppingCart className="text-pink-600 text-3xl" />,
    description:
      "Click the 'Add to Cart' button on the product you'd like to purchase. You can review your selections in your cart.",
  },
  {
    title: "3. Place Order",
    icon: <FaMoneyCheckAlt className="text-pink-600 text-3xl" />,
    description:
      "Proceed to checkout, fill in your contact & delivery details, and confirm your order.",
  },
  {
    title: "4. Order Confirmation & Delivery",
    icon: <FaTruck className="text-pink-600 text-3xl" />,
    description:
      "Once your order is confirmed, our team will reach out for final confirmation and ship your package promptly.",
  },
];

const page = () => {
  return (
    <section className="py-16 mt-4 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How to Order from Adora Sparkles
        </h2>
        <p className="mb-12 text-gray-600 text-lg">
          Follow these simple steps to get your perfect accessories delivered to
          your doorstep.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2 md:mb-0">{step.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
