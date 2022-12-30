import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row bg-yellow-200 h-screen">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Default;
