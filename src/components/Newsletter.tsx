"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
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
          background: "#ff1493", // pink background
          color: "#fff", // white text
          fontWeight: "bold", // background color
        },
        icon: <FaCheckCircle color="white" size={20} />,
      });

      setEmail(""); // clear input
    }, 3000);
  };

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4 md:px-16"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Sparkle Club
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Get exclusive offers, early access to collections, and
            behind-the-scenes stories from Adora Sparkles.
          </p>

          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto px-5 py-3 rounded-full text-white text-lg border border-white outline-none bg-transparent"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full text-white font-medium"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-300">
            No spam. Just love & sparkle{" "}
            <span className="animate-bounce text-lg">❤️</span>
          </p>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        progressClassName="bg-white"
      />
    </div>
  );
};

export default NewsLetter;
