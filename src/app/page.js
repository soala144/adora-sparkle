import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Categories />
      <Product />
      <Newsletter />
      <Reviews />
    </div>
  );
};

export default page;
