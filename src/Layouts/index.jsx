import React, { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
// import Sidebar from "../Components/Sidebar";
// import Navbar from "../Components/Navbar";

export const MainLayout = () => {
  return (
      <div>
      <Toaster position="top-center" containerStyle={{ zIndex: 99999 }} />
      
      <Outlet />
    </div>
  );
};
