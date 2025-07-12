import React from "react";

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
      <div className="absolute inset-0 z-10  flex items-center justify-center text-center text-white px-4 flex-col">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome To Adora Sparkles
        </h1>
        <p className="mb-6 text-lg">
          Discover Premium Accessories at the best price
        </p>
        <button className="bg-white text-black px-6 py-3 rounded font-medium">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
