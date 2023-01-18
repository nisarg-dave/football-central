import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div className="min-w-screen flex flex-col flex-grow">
      <Navbar />
      <div className="flex flex-row min-h-screen min-w-screen flex-grow">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default Default;
