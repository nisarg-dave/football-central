import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div className="layout min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
}

export default Default;
