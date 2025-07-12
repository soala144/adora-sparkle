import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Categories />
      <Product />
      <Newsletter />
    </div>
  );
};

export default page;
