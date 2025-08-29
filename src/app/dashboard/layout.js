import DashboardSidebar from "../../components/DashboardSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gray-50">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex gap-4 px-4 lg:px-6 pt-4">
              <DashboardSidebar />

              <main className="flex-1 min-w-0 lg:ml-0">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
