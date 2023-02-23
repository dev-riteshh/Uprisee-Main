import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import DashboardHeader from "./components/DashboardHeader";

const dashboard = () => {
  return (
    <div className="py-3 px-10" >
      <DashboardHeader />
      <div className="flex gap-3">
        <SideNav />
        <Outlet />
      </div>
    </div>
  );
};

export default dashboard;
