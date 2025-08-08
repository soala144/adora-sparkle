import ProductPg from "../../components/ProductPg";
import React from "react";

export const metadata = {
  title: "Products | Adora Sparkles",
  description: "Browse our collection of handmade accessories and products.",
};

const page = () => {
  return (
    <div>
      <ProductPg />
    </div>
  );
};

export default page;
