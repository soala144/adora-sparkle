"use client";

import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaFilter,
  FaDownload,
  FaShoppingCart,
} from "react-icons/fa";
import {
  MdPending,
  MdLocalShipping,
  MdCheckCircle,
  MdCancel,
} from "react-icons/md";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/orders");
        if (res.ok) {
          const data = await res.json();
          setOrders(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "PENDING":
        return <MdPending className="w-4 h-4" />;
      case "PROCESSING":
        return <MdLocalShipping className="w-4 h-4" />;
      case "SHIPPED":
        return <MdLocalShipping className="w-4 h-4" />;
      case "DELIVERED":
        return <MdCheckCircle className="w-4 h-4" />;
      case "CANCELLED":
        return <MdCancel className="w-4 h-4" />;
      default:
        return <MdPending className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "PROCESSING":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "SHIPPED":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "DELIVERED":
        return "bg-green-100 text-green-700 border-green-200";
      case "CANCELLED":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredOrders =
    filterStatus === "all"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "PENDING").length,
    processing: orders.filter((o) => o.status === "PROCESSING").length,
    delivered: orders.filter((o) => o.status === "DELIVERED").length,
    cancelled: orders.filter((o) => o.status === "CANCELLED").length,
  };

  return (
    <div className="min-h-screen bg-white p-4 lg:p-6">
      {/* Page Header */}
      <div className="mb-6 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Orders
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Manage and track customer orders
            </p>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
              <FaDownload className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
              <FaFilter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        <div
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Processing</p>
            <p className="text-2xl font-bold text-blue-600">
              {stats.processing}
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Delivered</p>
            <p className="text-2xl font-bold text-green-600">
              {stats.delivered}
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Cancelled</p>
            <p className="text-2xl font-bold text-red-600">{stats.cancelled}</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 animate-fade-in-up"
        style={{ animationDelay: "700ms" }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-gray-700">
            Filter by status:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                filterStatus === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setFilterStatus("PENDING")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                filterStatus === "PENDING"
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setFilterStatus("PROCESSING")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                filterStatus === "PROCESSING"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              Processing ({stats.processing})
            </button>
            <button
              onClick={() => setFilterStatus("DELIVERED")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                filterStatus === "DELIVERED"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Delivered ({stats.delivered})
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "800ms" }}
      >
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">
            Order List ({filteredOrders.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading orders...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShoppingCart className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">No orders found</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="bg-white hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        #{order.id.slice(0, 8)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {order.fullName}
                        </p>
                        <p className="text-sm text-gray-500">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {order.items?.length || 0} items
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        {formatCurrency(order.totalAmount || 0)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}
                      >
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150">
                          <FaEye className="w-3 h-3 mr-1" />
                          View
                        </button>
                        <button className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150">
                          <FaEdit className="w-3 h-3 mr-1" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
