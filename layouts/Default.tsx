import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  const [showSide, setShowSide] = useState(false);
  const toggleSideNav = () => {
    setShowSide(!showSide);
  };
  return (
    <div className="layout min-h-screen">
      <Navbar toggleSideNav={toggleSideNav} />
      <Sidebar toggleSideNav={toggleSideNav} showSide={showSide} />
      {showSide ? (
        <main className="hidden md:main md:block">{children}</main>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
}

export default Default;
