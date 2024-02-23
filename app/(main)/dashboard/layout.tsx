import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: any;
}

const DashboardLayout = ({ children, params }: DashboardLayoutProps) => {
  return <main className="flex over-hidden h-screen">{children}</main>;
};

export default DashboardLayout;
