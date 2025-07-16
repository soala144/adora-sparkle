"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex mt-15 max-[1121px]:mx-auto w-[90.6vw] items-center justify-between mb-[140px]">
      <Image
        src="/images/side_Image.png"
        className="h-[781px] w-[61.7%] max-[1121px]:hidden"
        alt=""
        width={192}
        height={192}
        priority
      />
      <form className="max-[1121px]:mx-auto max-[1121px]:w-fit">
        <h1 className="text-[36px] font-medium max-[1121px]:text-center max-[1121px]:text-[30px] max-[320px]:text-[25px]">
          Create an account
        </h1>
        <p className="mt-6 max-[1121px]:text-center">
          Enter your details below
        </p>
        <div className="flex flex-col gap-10 mt-12 mb-10 max-[521px]:w-[90vw]">
          <input
            type="text"
            className="border-b border-b-black/50 pb-2 outline-none"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="border-b border-b-black/50 pb-2 outline-none"
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            className="border-b border-b-black/50 pb-2 outline-none"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            // disabled={isLoading}
            className="bg-pink-400 cursor-pointer text-white flex items-center justify-center w-full rounded h-14 mb-4"
          >
            Create Account
          </button>
          <button className="flex items-center h-14 border border-black/40 rounded justify-center w-full gap-4">
            <Image
              src="/images/Icon-Google.png"
              className="w-6 h-6"
              alt=""
              width={192}
              height={192}
              priority
            />
            <p>Sign up with Google</p>
          </button>
        </div>
        <p className="mt-[34px] text-black/70">
          Already have an account?
          {/* <Link
            to="/login"
            className="underline font-medium underline-offset-[7px]"
          > */}
          Log In
          {/* </Link> */}
        </p>
      </form>
    </div>
  );
};

export default page;
