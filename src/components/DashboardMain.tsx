import React from "react";

const DashboardMain = () => {
  // Example data for demonstration (replace with real data from API or props)
  const shippedOrders = 12;
  const pendingOrders = 5;
  const newOrders = 3;
  const inboxMessages = [
    { id: 1, subject: "Order #1234 shipped", time: "2h ago" },
    { id: 2, subject: "New customer inquiry", time: "4h ago" },
  ];
  const activities = [
    { id: 1, action: "Order #1234 marked as shipped", time: "2h ago" },
    { id: 2, action: "Order #1235 placed", time: "3h ago" },
    { id: 3, action: "Stock updated for Classic Bracelet", time: "5h ago" },
  ];
  const trends = [
    { id: 1, label: "Waist Beads", value: 8 },
    { id: 2, label: "Bracelets", value: 5 },
    { id: 3, label: "Anklets", value: 2 },
  ];

  return (
    <div className="lg:w-[70%] md:w-[53%] w-full">
      {/* Top summary cards */}
      <div className="grid lg:grid-cols-3 lg:h-35 h-auto gap-2 lg:gap-7">
        <div className="bg-[#ff66d1] relative text-white pl-7 h-35 lg:h-full pt-5 rounded-lg">
          <h3 className="text-[18px] font-bold">Shipped Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            {shippedOrders}
          </h2>
        </div>
        <div className="bg-pink-500 rounded-lg relative text-white pl-7 pt-5 h-35 lg:h-full">
          <h3 className="text-[18px] font-bold">Pending Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            {pendingOrders}
          </h2>
        </div>
        <div className="bg-[#f653c5] relative text-white pl-7 pt-5 rounded-lg h-35 lg:h-full">
          <h3 className="text-[18px] font-bold">New Orders</h3>
          <h2 className="absolute bottom-5 text-[30px] font-bold right-[30px]">
            {newOrders}
          </h2>
        </div>
      </div>

      {/* Main dashboard sections */}
      <div className="lg:grid gap-2 lg:gap-7 lg:grid-cols-2 my-7">
        {/* Inbox */}
        <div>
          <div className="h-[153px] bg-white rounded-lg mb-7 relative p-4">
            <h2 className="font-semibold pl-2 pt-1 text-[18px]">Inbox</h2>
            {inboxMessages.length === 0 ? (
              <p className="text-gray-500 absolute left-1/2 top-1/2 transform -translate-1/2">
                No inbox available
              </p>
            ) : (
              <ul className="mt-3">
                {inboxMessages.map((msg) => (
                  <li
                    key={msg.id}
                    className="flex justify-between py-1 border-b last:border-b-0"
                  >
                    <span className="text-gray-700 text-sm">{msg.subject}</span>
                    <span className="text-gray-400 text-xs">{msg.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Recent Activities */}
          <div className="h-[344px] bg-white rounded-lg relative p-4">
            <h2 className="font-semibold pl-2 pt-1 text-[18px]">
              Recent activities
            </h2>
            {activities.length === 0 ? (
              <p className="text-gray-500 absolute left-1/2 top-1/2 w-full text-center transform -translate-1/2">
                No activities have been recorded
              </p>
            ) : (
              <ul className="mt-3 overflow-y-auto max-h-[270px] pr-2">
                {activities.map((act) => (
                  <li
                    key={act.id}
                    className="flex justify-between py-1 border-b last:border-b-0"
                  >
                    <span className="text-gray-700 text-sm">{act.action}</span>
                    <span className="text-gray-400 text-xs">{act.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Today's Trend */}
        <div className="bg-white rounded-lg relative mt-7 lg:mt-0 lg:h-full h-[525px] p-4">
          <h2 className="font-semibold pl-2 pt-1 text-[18px]">
            Today&apos;s Trend
          </h2>
          {trends.length === 0 ? (
            <p className="text-gray-500 absolute left-1/2 top-1/2 w-full text-center transform -translate-1/2">
              No trends available at this time
            </p>
          ) : (
            <ul className="mt-6">
              {trends.map((trend) => (
                <li
                  key={trend.id}
                  className="flex justify-between py-2 border-b last:border-b-0"
                >
                  <span className="text-pink-600 font-semibold">
                    {trend.label}
                  </span>
                  <span className="text-black font-bold">{trend.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
