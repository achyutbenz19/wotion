import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: any;
}

const DashboardLayout = ({ children, params }: DashboardLayoutProps) => {
  return (
    <main className="flex overflow-hidden h-screen w-screen">{children}</main>
  );
};

export default DashboardLayout;
