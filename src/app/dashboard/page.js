"use client";

import DashboardMain from "../../components/DashboardMain";

import React from "react";

const Dashboard = () => {
  return (
    <div className=" w-full">
      {/* <div className="w-[90%] mx-auto max-w-[1440px]">
        <DashboardHeader />
        <div className="flex justify-between ">
          <DashboardSidebar />
          <DashboardMain />
        </div>
      </div> */}
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
