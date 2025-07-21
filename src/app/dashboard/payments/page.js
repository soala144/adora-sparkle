"use client";

import React from "react";

const dummyPayments = [
  {
    id: "PAY-001",
    order: "ORD-1001",
    amount: "₦77,900.00",
    method: "Card",
    date: "2025-07-19",
    status: "Completed",
  },
  {
    id: "PAY-002",
    order: "ORD-1002",
    amount: "₦25,000.00",
    method: "Bank Transfer",
    date: "2025-07-18",
    status: "Pending",
  },
  {
    id: "PAY-003",
    order: "ORD-1003",
    amount: "₦18,500.00",
    method: "Card",
    date: "2025-07-17",
    status: "Failed",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

const PaymentsPage = () => (
  <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
    <h1 className="text-3xl font-extrabold mb-8 text-pink-600 tracking-tight">
      Payments
    </h1>
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-700 text-sm uppercase">
            <th className="py-2">Payment ID</th>
            <th className="py-2">Order</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Method</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyPayments.map((payment) => (
            <tr
              key={payment.id}
              className="bg-gray-50 hover:bg-pink-50 transition rounded-lg"
            >
              <td className="py-3 px-2 font-semibold text-pink-600">
                {payment.id}
              </td>
              <td className="py-3 px-2">{payment.order}</td>
              <td className="py-3 px-2 font-bold">{payment.amount}</td>
              <td className="py-3 px-2">{payment.method}</td>
              <td className="py-3 px-2">{payment.date}</td>
              <td className="py-3 px-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    statusColors[payment.status]
                  }`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PaymentsPage;
