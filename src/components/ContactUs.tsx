"use client";

import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNum: "",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (Object.values(formData).some((val) => val.trim() === "")) {
      toast.error("Please fill all fields before submitting.", {
        style: {
          background: "#ff1493", // pink background
          color: "#fff", // white text
          fontWeight: "bold", // background color
        },
        icon: <FaCheckCircle color="white" size={20} />,
      });
      return;
    }

    toast.success("Your request has been submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      telNum: "",
      msg: "",
    });
  };

  return (
    <div className="pt-18 max-w-[1440px] mx-auto">
      <div className="w-[184px] sm:w-[462px] mx-auto">
        <h1 className="text-[24px] lg:text-[40px] text-center mt-5 lg:mt-10 font-bold">
          Contact Us
        </h1>
        <p className="text-center text-[14px] lg:text-[18px] text-[#717171]">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="w-[86.1%] mx-auto lg:grid lg:grid-cols-2 gap-10 my-0 lg:my-12">
        {/* Left section */}
        <div className="bg-[#ff66d1] overflow-hidden relative rounded-[5px] lg:pl-10 lg:pt-10 h-[397px] lg:h-full lg:my-0 w-full my-7 text-white pt-[15px] pb-[25px]">
          <div className="bg-pink-400 bottom-[-100px] right-[-100px] size-50 lg:bottom-[-70px] lg:right-[-70px] absolute rounded-full" />
          <div className="bg-pink-500 bottom-[35px] right-[30px] size-15 lg:size-20 lg:bottom-[55px] lg:right-[55px] absolute rounded-full" />
          <h2 className="text-[20px] lg:text-[28px] font-semibold max-lg:text-center">
            Contact Information
          </h2>
          <p className="text-[#e8cfcf] mb-3 max-lg:text-center lg:mt-[6px] mt-[10px]">
            Say something to start a chat!
          </p>
          <div className="lg:mt-[110px]">
            <div className="w-fit lg:w-full max-lg:mx-auto mt-3 gap-[10px] lg:gap-[25px] lg:items-center flex flex-col lg:flex-row">
              <LuPhoneCall size={24} className="max-lg:mx-auto" />
              <p className="text-xs lg:text-base">+234 814 821 9109</p>
            </div>
            <div className="w-fit lg:w-full max-lg:mx-auto mt-3 gap-[10px] lg:gap-[25px] lg:items-center flex flex-col lg:flex-row">
              <MdOutlineMailOutline size={24} className="max-lg:mx-auto" />
              <p className="text-xs lg:text-base">
                robinsonadoration@gmail.com
              </p>
            </div>
            <div className="w-fit lg:w-full max-lg:mx-auto mt-3 lg:gap-[25px] gap-[10px] flex flex-col lg:flex-row">
              <MdLocationPin size={24} className="max-lg:mx-auto" />
              <p className="text-xs lg:text-base w-[221px] lg:w-[288px] max-lg:text-center">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
            <div className="flex gap-6 w-fit lg:absolute bottom-9 mx-auto mt-[58px]">
              <div className="rounded-full bg-[#a03580] flex items-center justify-center size-[30px]">
                <FaFacebookF size={15} />
              </div>
              <div className="rounded-full bg-[#a03580] flex items-center justify-center size-[30px]">
                <FaInstagram size={15} />
              </div>
              <div className="rounded-full bg-[#a03580] flex items-center justify-center size-[30px]">
                <FaTiktok size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* Right section (form) */}
        <div>
          <form onSubmit={submitForm}>
            <div className="lg:grid-cols-2 lg:grid gap-9">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="outline-none mt-3 border-b-2 border-[#8D8D8D] pb-1"
                />
              </div>

              <div className="flex flex-col lg:my-0 my-5">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="outline-none mt-3 border-b-2 border-[#8D8D8D] pb-1"
                />
              </div>

              <div className="flex flex-col lg:my-0 my-5">
                <label htmlFor="email" className="font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none mt-3 border-b-2 border-[#8D8D8D] pb-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telNum" className="font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="telNum"
                  placeholder="Your phone number"
                  value={formData.telNum}
                  onChange={handleChange}
                  className="outline-none mt-3 border-b-2 border-[#8D8D8D] pb-1"
                />
              </div>

              <div className="flex flex-col my-5 lg:my-0 col-span-2">
                <label htmlFor="msg" className="font-semibold">
                  Message
                </label>
                <textarea
                  name="msg"
                  placeholder="Enter your message here..."
                  value={formData.msg}
                  onChange={handleChange}
                  className="outline-none mt-3 border-b-2 border-[#8D8D8D] pb-1 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mb-[25px] lg:mt-[106px] mt-5 h-[38.29px] w-full lg:h-[56px] lg:col-start-2 cursor-pointer bg-[#ff66d1] rounded text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
