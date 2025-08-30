"use client";
import React, { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("You have successfully applied to the newsletter 🎉", {
        style: {
          background: "linear-gradient(135deg, #475569, #64748b)",
          color: "#fff",
          fontWeight: "bold",
        },
        icon: <FaCheckCircle color="white" size={20} />,
      });

      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-300 to-slate-300 rounded-full opacity-5 animate-float-slow"></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-slate-900/70 to-gray-900/80 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8">
          <IoSparkles className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">
            Exclusive Access
          </span>
        </div>

        {/* Main Content */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join the
          <span className="block bg-gradient-to-r from-gray-300 to-slate-300 bg-clip-text text-transparent">
            Sparkle Club
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get exclusive offers, early access to collections, and
          behind-the-scenes stories from Adora Sparkles. Be the first to know
          about new arrivals and special promotions.
        </p>

        {/* Newsletter Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="relative flex-1 max-w-md">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-lg border-2 border-white/30 outline-none bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3 min-w-[180px] justify-center"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe Now
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <FaCheckCircle className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-white font-semibold mb-1">
                Exclusive Offers
              </h4>
              <p className="text-white/70 text-sm">Member-only discounts</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <FaCheckCircle className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-white font-semibold mb-1">Early Access</h4>
              <p className="text-white/70 text-sm">
                First to see new collections
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <FaCheckCircle className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-white font-semibold mb-1">Behind Scenes</h4>
              <p className="text-white/70 text-sm">
                Exclusive content & stories
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/70">
            No spam. Just love & sparkle{" "}
            <span className="inline-block animate-bounce text-lg">✨</span>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        progressClassName="bg-gradient-to-r from-gray-600 to-slate-600"
        toastClassName="rounded-2xl shadow-2xl"
      />
    </section>
  );
};

export default NewsLetter;
