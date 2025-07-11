import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <h2 className="text-center mt-20 font-bold text-4xl">Contact Us</h2>
      <p className="text-center text-[#717171] mt-[10px] max-sm:w-[184px] max-sm:mx-auto">
        Any question or remarks? Just write us a message!
      </p>
      <div className="w-[83%] max-sm:w-[95vw] mx-auto h-[667px] max-lg:h-fit bg-white rounded-[10px] lg:flex my-[50px] py-[10px] pl-[10px]">
        <div className="bg-def-red-bg max-lg:pb-[113px] max-lg:h-fit lg:h-[100%]  text-white lg:pl-10 pt-10 rounded-[10px] max-sm:w-full w-[491px] relative overflow-hidden">
          <div className="lg:size-[138px] size-[54px] bg-[#F34848]/50 rounded-full absolute bottom-[60px] right-[60px] lg:bottom-[70px] lg:right-[70px]"></div>
          <div className="lg:size-[269px] size-[192px]  bg-[#BD1A1A]/73 rounded-full absolute lg:-bottom-[70px] -bottom-[80px] -right-[80px] lg:-right-[100px]"></div>
          <h2 className=" text-xl max-lg:text-center lg:text-[28px] font-semibold mb-[6px]">
            Contact Information
          </h2>
          <p className="max-lg:text-center">Text us and get quick feeback!</p>
          <div className="mt-3 lg:mt-[111px]">
            <div className="flex gap-[25px] items-start max-lg:flex-col max-lg:items-center">
              <Image
                src="/images/call_icon.png"
                width={24}
                height={24}
                className="size-6"
                alt="Call icon"
              />
              <p>+1012 3456 789</p>
            </div>
            <div className="flex gap-[25px] my-[15px] lg:my-[50px] max-lg:flex-col max-lg:items-center items-start">
              <Image
                src="/images/contact_email_icon.png"
                width={24}
                height={24}
                className="size-6"
                alt="Contact email icon"
              />
              <p>demo@gmail.com</p>
            </div>
            <div className="flex gap-[25px] max-lg:flex-col max-lg:items-center items-start">
              <Image
                src="/images/location.png"
                width={24}
                height={24}
                className="size-6"
                alt="Location icon"
              />
              <p className="w-[251px] max-lg:mx-auto max-lg:text-center lg:w-[288px]">
                {" "}
                No. 1 Marine Base Road, Port Harcourt, Rivers State, Nigeria:
              </p>
            </div>
          </div>
        </div>
        <div className="grid h-fit lg:grid-cols-2 mt-15 gap-[39px] px-[10px] lg:px-[40px]">
          <div className="h-[55px]">
            <label
              className="mb-[4px] text-def-red-bg font-bold text-xl"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              name="first_name"
              className=" text-def-red-bg font-medium w-full border-b pb-2 outline-none"
            />
          </div>
          <div className="h-[55px]">
            <label
              className="mb-[4px] text-def-red-bg font-bold text-xl"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              name="last_name"
              className=" text-def-red-bg font-medium w-full border-b pb-2 outline-none"
            />
          </div>
          <div className="h-[55px]">
            <label
              className="mb-[4px] text-def-red-bg font-bold text-xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              name="email"
              className="text-def-red-bg font-medium w-full border-b pb-2 outline-none "
            />
          </div>
          <div className="h-[55px]">
            <label
              className="mb-[4px] text-def-red-bg font-bold text-xl"
              htmlFor="tel"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+123 4567 890"
              name="tel"
              className="w-full text-def-red-bg font-medium  border-b pb-2 outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label
              htmlFor="msg"
              className="mb-[4px] text-def-red-bg font-bold text-xl"
            >
              Message
            </label>
            <textarea
              name="msg"
              className="text-def-red-bg font-medium w-full border-b pb-2 outline-none resize-none"
              placeholder="Write your message..."
            />
          </div>
          <div></div>
          <button className="border w-full lg:w-[214px] h-[54px] bg-def-red-bg rounded-[5px] text-white cursor-pointer mt-[25px] lg:mt-[106px] block">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
