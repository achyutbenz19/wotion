import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: any;
}

const DashboardLayout = ({ children, params }: DashboardLayoutProps) => {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <Sidebar params={params} />
      <div className="dark:border-neutral-500 border-l-[1px] w-full relative overflow-scroll">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
