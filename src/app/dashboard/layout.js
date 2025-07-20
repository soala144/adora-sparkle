import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-[90%] mx-auto max-w-[1440px]">
          <DashboardHeader />

          <div className="flex justify-between">
            <DashboardSidebar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
