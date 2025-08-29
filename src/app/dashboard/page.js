"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { MdDashboard, MdTrendingUp, MdTrendingDown } from "react-icons/md";

const TypewriterText = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalCustomers: 0,
  });
  const [animateStats, setAnimateStats] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const [productsRes, ordersRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/orders"),
        ]);

        // Check if responses are ok and have content
        let products = [];
        let orders = [];

        if (productsRes.ok) {
          try {
            const productsData = await productsRes.json();
            products = Array.isArray(productsData) ? productsData : [];
          } catch (parseError) {
            console.warn("Could not parse products response:", parseError);
            products = [];
          }
        } else {
          console.warn("Products API returned status:", productsRes.status);
        }

        if (ordersRes.ok) {
          try {
            const ordersData = await ordersRes.json();
            orders = Array.isArray(ordersData) ? ordersData : [];
          } catch (parseError) {
            console.warn("Could not parse orders response:", parseError);
            orders = [];
          }
        } else {
          console.warn("Orders API returned status:", ordersRes.status);
        }

        // Calculate revenue from orders
        const revenue = Array.isArray(orders)
          ? orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0)
          : 0;

        setStats({
          totalRevenue: revenue,
          totalOrders: Array.isArray(orders) ? orders.length : 0,
          totalProducts: Array.isArray(products) ? products.length : 0,
          totalCustomers: Array.isArray(orders)
            ? new Set(
                orders
                  .map((o) => o.email || o.customerEmail || "")
                  .filter(Boolean)
              ).size
            : 0,
        });

        // Trigger animations after data loads
        setTimeout(() => setAnimateStats(true), 500);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        // Set default stats on error
        setStats({
          totalRevenue: 0,
          totalOrders: 0,
          totalProducts: 0,
          totalCustomers: 0,
        });
        // Still trigger animations
        setTimeout(() => setAnimateStats(true), 500);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const recentOrders = [
    {
      id: 1,
      customer: "Sarah Johnson",
      amount: 25000,
      status: "Delivered",
      date: "2 hours ago",
    },
    {
      id: 2,
      customer: "Mike Chen",
      amount: 18000,
      status: "Processing",
      date: "4 hours ago",
    },
    {
      id: 3,
      customer: "Emma Davis",
      amount: 32000,
      status: "Shipped",
      date: "1 day ago",
    },
    {
      id: 4,
      customer: "Alex Brown",
      amount: 15000,
      status: "Pending",
      date: "2 days ago",
    },
  ];

  const topProducts = [
    { name: "Classic Waist Beads", sales: 45, revenue: 112500 },
    { name: "Premium Anklets", sales: 32, revenue: 112000 },
    { name: "Bracelet Set", sales: 28, revenue: 50400 },
    { name: "Phone Charms", sales: 25, revenue: 20000 },
  ];

  return (
    <div className="min-h-screen bg-white p-6 lg:p-8">
      {/* Page Header with Typewriter Effect */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          <TypewriterText
            text="Welcome back, Soala! 👋"
            speed={80}
            className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent"
          />
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-2 animate-fade-in-up animation-delay-200">
          Here&apos;s what&apos;s happening with your store today
        </p>
      </div>

      {/* Stats Cards with Staggered Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
            animateStats ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                {isLoading ? (
                  <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  formatCurrency(stats.totalRevenue)
                )}
              </p>
              <div className="flex items-center mt-1">
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1 animate-bounce" />
                <span className="text-sm text-green-600">+12.5%</span>
              </div>
            </div>
            <div className="p-3 bg-green-100 rounded-lg animate-pulse">
              <FaChartLine className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
            animateStats ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">
                {isLoading ? (
                  <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  stats.totalOrders
                )}
              </p>
              <div className="flex items-center mt-1">
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1 animate-bounce" />
                <span className="text-sm text-green-600">+8.2%</span>
              </div>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg animate-pulse">
              <FaShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
            animateStats ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Products
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {isLoading ? (
                  <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  stats.totalProducts
                )}
              </p>
              <div className="flex items-center mt-1">
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1 animate-bounce" />
                <span className="text-sm text-green-600">+5.7%</span>
              </div>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg animate-pulse">
              <FaShoppingBag className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
            animateStats ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Customers
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {isLoading ? (
                  <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  stats.totalCustomers
                )}
              </p>
              <div className="flex items-center mt-1">
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1 animate-bounce" />
                <span className="text-sm text-green-600">+15.3%</span>
              </div>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg animate-pulse">
              <FaUsers className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics Row with Fade In */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-fade-in-up animation-delay-700 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Trend
            </h3>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-gray-500 focus:border-gray-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FaChartLine className="w-16 h-16 text-gray-300 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-500">Chart visualization coming soon</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-fade-in-up animation-delay-800 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Products
          </h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between animate-fade-in-up"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(product.revenue)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Row with Slide In */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-slide-in-left hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h3>
            <Link
              href="/dashboard/orders"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${1000 + index * 150}ms` }}
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {order.customer}
                  </p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(order.amount)}
                  </p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Shipped"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-slide-in-right hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/dashboard/products"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              <FaShoppingBag className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">
                Add Product
              </span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              <FaShoppingCart className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">
                View Orders
              </span>
            </Link>
            <Link
              href="/dashboard/products"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              <MdDashboard className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">
                Manage Inventory
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              <FaChartLine className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-sm font-medium text-gray-900">
                View Analytics
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
