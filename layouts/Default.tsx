import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div className="bg-yellow-200">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <main className="w-screen">{children}</main>
      </div>
    </div>
  );
}

export default Default;
