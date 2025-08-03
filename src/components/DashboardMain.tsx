import React from "react";

const DashboardMain = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-2 md:px-8 lg:px-12">
      <div className="grid lg:grid-cols-3 h-auto gap-2 lg:gap-7">
        <div className="bg-[#ff66d1] relative text-white pl-7 h-35 lg:h-full pt-5 rounded-lg">
          <h3 className="text-[18px] font-bold">Shipped Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            0
          </h2>
        </div>
        <div className="bg-pink-500 rounded-lg relative text-white pl-7 pt-5 h-35 lg:h-full">
          <h3 className="text-[18px] font-bold">Pending Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            0
          </h2>
        </div>
        <div className="bg-[#f653c5] relative text-white pl-7 pt-5 rounded-lg h-35 lg:h-full">
          <h3 className="text-[18px] font-bold">New Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            0
          </h2>
        </div>
      </div>
      <div className="lg:grid gap-2 lg:gap-7 lg:grid-cols-2 my-7">
        <div>
          <div className="h-[153px] bg-white rounded-lg mb-7 relative">
            <h2 className="font-semibold pl-[29px] pt-3 text-[18px]">Inbox</h2>
            <p className="text-gray-500 absolute left-1/2 top-1/2 transform -translate-1/2">
              No inbox available
            </p>
          </div>
          <div className="h-[344px] bg-white rounded-lg relative">
            <h2 className="font-semibold pl-[29px] pt-3 text-[18px]">
              Recent activities
            </h2>
            <p className="text-gray-500 absolute left-1/2 top-1/2  w-full text-center transform -translate-1/2">
              No activities have been recorded
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg relative mt-7 lg:mt-0 lg:h-full h-[525px]">
          <h2 className="font-semibold pl-[29px] pt-3 text-[18px]">
            Today&apos;s Trend
          </h2>
          <p className="text-gray-500 absolute left-1/2 top-1/2 w-full text-center transform -translate-1/2">
            No trends available at this time
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
