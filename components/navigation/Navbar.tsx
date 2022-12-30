import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="bg-black border-black py-1.5 text-yellow-300 flex items-center h-20 w-full">
      <img
        className="h-30 w-16 ml-3 rounded-full cursor-pointer"
        src="https://freesvg.org/img/soccer_ball2.png"
        alt="Football Logo"
        onClick={() => router.push("/")}
      />
      <h1 className="font-bold text-5xl pt-2">Football Central</h1>
    </div>
  );
}

export default Navbar;
