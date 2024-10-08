// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { Sidebar } from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Sidebar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6 bg-white p-3 m-2 pb-8 rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
