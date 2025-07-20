"use client";

import React from "react";


const dummyAnalytics = [
  { label: 'Total Sales', value: '₦500,000.00', change: '+12%' },
  { label: 'Total Orders', value: '120', change: '+8%' },
  { label: 'New Customers', value: '35', change: '+5%' },
  { label: 'Refunds', value: '₦10,000.00', change: '-2%' },
];

const AnalyticsPage = () => (
  <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
    <h1 className="text-3xl font-extrabold mb-8 text-pink-600 tracking-tight">Analytics</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dummyAnalytics.map((item) => (
        <div key={item.label} className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-500 mb-2">{item.label}</span>
          <span className="text-2xl font-bold text-pink-600 mb-1">{item.value}</span>
          <span className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{item.change}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsPage;
