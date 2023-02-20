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
      <Sidebar
        handleShowSide={() => setShowSide(!showSide)}
        showSide={showSide}
      />
      {showSide ? (
        <main className="hidden md:main md:block">{children}</main>
      ) : (
        <main className="md:main md:block">{children}</main>
      )}
    </div>
  );
}

export default Default;
