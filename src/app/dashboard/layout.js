import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#F8F7FC]">
          <div className="w-[90%]  mx-auto max-w-[1440px]">
            <DashboardHeader />

            <div className="flex justify-between gap-14">
              <DashboardSidebar />

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
