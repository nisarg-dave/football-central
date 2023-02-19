import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  const [showSide, setShowSide] = useState(true);
  return (
    <div className="layout min-h-screen">
      <Navbar handleShowSide={() => setShowSide(!showSide)} />
      <Sidebar showSide={showSide} />
      <main className="main">{children}</main>
    </div>
  );
}

export default Default;
