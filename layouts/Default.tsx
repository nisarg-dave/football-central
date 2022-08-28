import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

function Default({ children }: DefaultProps) {
  const [showSide, setShowSide] = useState(false);

  const showSideBar = () => {
    setShowSide(!showSide);
  };

  return (
    <div>
      <Navbar handleClick={showSideBar} />
      {showSide ? <Sidebar /> : <></>}
      <main>{children}</main>
    </div>
  );
}

export default Default;
