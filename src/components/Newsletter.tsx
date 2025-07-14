import React from "react";

const NewsLetter = () => {
  return (
    <div>
      {" "}
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

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-5 py-3 rounded-full text-white text-lg border border-white outline-none"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full text-white font-medium"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-300">
            No spam. Just love & sparkle{" "}
            <span className="animate-bounce text-lg">❤️</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
