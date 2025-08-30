import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="hero-video.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm z-0"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-float z-10"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-float-delayed z-10"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full animate-float-slow z-10"></div>

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4 flex-col">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8">
          <IoSparkles className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">
            Premium Handcrafted Accessories
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome To
          <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Adora Sparkles
          </span>
        </h1>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/90">
          Discover Premium Accessories at the best price. Handcrafted with love
          and precision, our premium accessories empower and beautify every
          soul.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
            Shop Now
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
            <FaPlay className="w-4 h-4" />
            Watch Story
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-white/80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-white/80">Unique Designs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-white/80">Handcrafted</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
