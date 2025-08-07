"use client";
import { useEffect } from "react";
import { fireConfetti } from "../../../lib/confetti";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const Page = () => {
  useEffect(() => {
    fireConfetti();
  }, []);

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center">
      <FaCheckCircle className="h-16 w-16 text-pink-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-pink-500">
        Your Order has been placed succesfully !
      </h1>
      <p className="mt-4 text-pink-400">Thank you for your purchase </p>

      <p className="mt-7 text-gray-400 text-xl">
        You will receive an email confirmation shortly. When your payment has
        been confirmed
      </p>
      <button className="bg-pink-400 flex mt-5 p-3 items-center text-gray-50 rounded">
        <GoArrowLeft />
        <Link href="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default Page;
