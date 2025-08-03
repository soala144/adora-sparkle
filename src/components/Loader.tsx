import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center w-full h-full py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-600 border-opacity-50"></div>
    <span className="ml-4 text-pink-600 font-bold text-lg">Loading...</span>
  </div>
);

export default Loader;
