import React from "react";

export default function OrderSentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Order Sent!</h2>
        <p className="mb-6">
          Your order has been sent. You will receive an email with your order
          details shortly.
        </p>
        <button
          className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-pink-700 transition w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
