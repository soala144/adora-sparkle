"use client";

import React, { useEffect, useState } from "react";
import ClientOnly from "../../../components/ClientOnly";

// const fetchOrders = async () => {
//   const res = await fetch("/api/orders");
//   if (!res.ok) return [];
//   const data = await res.json();
//   return data.orders || [];
// };

export default function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetchOrders().then(setOrders);
  // }, []);

  // const handleConfirmPayment = async (orderId) => {
  //   setLoading(true);
  //   setError("");
  //   const res = await fetch(`/api/orders/${orderId}/confirm-payment`, {
  //     method: "PATCH",
  //   });
  //   setLoading(false);
  //   const data = await res.json();
  //   if (data.success) {
  //     setOrders((prev) =>
  //       prev.map((o) => (o.id === orderId ? { ...o, status: "PAID" } : o))
  //     );
  //   } else {
  //     setError(data.error || "Failed to confirm payment");
  //   }
  // };

  // const handleAddTracking = async (orderId) => {
  //   const trackingInfo = prompt("Enter tracking info:");
  //   if (!trackingInfo) return;
  //   setLoading(true);
  //   setError("");
  //   const res = await fetch(`/api/orders/${orderId}/add-tracking`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ trackingInfo }),
  //   });
  //   setLoading(false);
  //   const data = await res.json();
  //   if (data.success) {
  //     setOrders((prev) =>
  //       prev.map((o) => (o.id === orderId ? { ...o, trackingInfo } : o))
  //     );
  //   } else {
  //     setError(data.error || "Failed to add tracking info");
  //   }
  // };

  return (
    <ClientOnly>
      <div className="w-[80%] m-auto ">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <table className="w-full bg-white rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Order ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Total</th>
              <th className="p-3">Zone</th>
              <th className="p-3">Status</th>
              <th className="p-3">Tracking</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono">0999908755</td>
              <td className="p-3">Soala</td>
              <td className="p-3">₦500</td>
              <td className="p-3">North</td>
              <td className="p-3">Paid</td>
              <td className="p-3">iii</td>
              <td className="p-3 flex gap-2">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  disabled={loading}
                >
                  Confirm Payment
                </button>

                {/* <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  disabled={loading}
                >
                  Add Tracking
                </button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ClientOnly>
  );
}
