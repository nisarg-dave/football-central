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
      <div className="flex flex-row  h-screen w-screen">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default Default;
