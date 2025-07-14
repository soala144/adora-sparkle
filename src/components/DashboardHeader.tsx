import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMessage, FaBell } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <header className="pt-20 flex justify-between items-end mb-[38px]">
      <div>
        {/* <h2>Total Revenue</h2> */}
        <h1 className="text-3xl flex items-center font-semibold">&#8358;0</h1>
      </div>
      <div className="lg:flex items-center py-[7px] px-[17px] hidden gap-3 rounded-[10px] shadow-[inset_0_0_8px_rgba(0,0,0,0.1)]">
        <IoSearchOutline size={20} color="#D2D2D2" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-[390px]"
        />
      </div>
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="lg:hidden">
          <IoSearchOutline size={25} color="#ff66d1" />
        </div>
        <div>
          <FaMessage color="#FF66D1" size={20} />
        </div>
        <div>
          <FaBell color="#FF66D1" size={20} />
        </div>
        <div>
          <FiUser color="#FF66D1" size={20} />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
