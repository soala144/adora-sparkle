import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Categories />
      <Newsletter />
    </div>
  );
};

export default page;
