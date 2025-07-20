"use client";

import React from "react";


const dummySettings = [
  { label: 'Account', description: 'Manage your account information and password.' },
  { label: 'Notifications', description: 'Set your notification preferences.' },
  { label: 'Payment Methods', description: 'Add or remove payment methods.' },
  { label: 'Security', description: 'Update security settings and 2FA.' },
];

const SettingsPage = () => (
  <div className="bg-[#F8F7FC] w-full min-h-screen p-8">
    <h1 className="text-3xl font-extrabold mb-8 text-pink-600 tracking-tight">Settings</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dummySettings.map((item) => (
        <div key={item.label} className="bg-white rounded-xl p-6 shadow-lg">
          <span className="text-lg font-bold text-pink-600 mb-2 block">{item.label}</span>
          <span className="text-gray-500 text-sm">{item.description}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SettingsPage;
