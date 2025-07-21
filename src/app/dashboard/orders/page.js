"use client";

import React from "react";

import { useState } from "react";

const initialOrders = [
  {
    id: "ORD-1001",
    customer: "Jane Doe",
    date: "2025-07-19",
    status: "Pending",
    total: "₦77,900.00",
  },
  {
    id: "ORD-1002",
    customer: "John Smith",
    date: "2025-07-18",
    status: "Paid",
    total: "₦25,000.00",
  },
  {
    id: "ORD-1003",
    customer: "Mary Johnson",
    date: "2025-07-17",
    status: "Delivering",
    total: "₦18,500.00",
  },
  {
    id: "ORD-1004",
    customer: "Chris Lee",
    date: "2025-07-16",
    status: "Completed",
    total: "₦10,000.00",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Paid: "bg-blue-100 text-blue-700",
  Delivering: "bg-purple-100 text-purple-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const OrdersPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Dummy email send
  const sendEmail = (orderId, newStatus) => {
    // In real app, call API here
    alert(`Email sent: Order ${orderId} status changed to ${newStatus}`);
  };

  const handleStatusChange = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: nextStatus } : order
      )
    );
    sendEmail(orderId, nextStatus);
  };

  const getNextAction = (status) => {
    switch (status) {
      case "Pending":
        return { label: "Confirm Payment", next: "Paid" };
      case "Paid":
        return { label: "Start Delivery", next: "Delivering" };
      case "Delivering":
        return { label: "Mark as Received", next: "Completed" };
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
      <h1 className="text-3xl font-extrabold mb-8 text-pink-600 tracking-tight">
        Orders
      </h1>
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-700 text-sm uppercase">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
              <th className="py-2">Total</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const action = getNextAction(order.status);
              return (
                <tr
                  key={order.id}
                  className="bg-gray-50 hover:bg-pink-50 transition rounded-lg"
                >
                  <td className="py-3 px-2 font-semibold text-pink-600">
                    {order.id}
                  </td>
                  <td className="py-3 px-2">{order.customer}</td>
                  <td className="py-3 px-2">{order.date}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 font-bold">{order.total}</td>
                  <td className="py-3 px-2">
                    {action ? (
                      <button
                        className="bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-pink-700 transition"
                        onClick={() =>
                          handleStatusChange(order.id, action.next)
                        }
                      >
                        {action.label}
                      </button>
                    ) : (
                      <span className="text-gray-400 text-xs">No action</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
