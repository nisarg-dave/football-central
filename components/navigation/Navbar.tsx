import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="border-b-2 bg-black border-black py-1.5 text-yellow-300 grid grid-cols-3 w-full h-20">
      <div className="col-span-1">
        <img
          className="h-30 w-16 ml-3 rounded-full cursor-pointer"
          src="https://freesvg.org/img/soccer_ball2.png"
          alt="Football Logo"
          onClick={() => router.push("/")}
        />
      </div>
      <h1 className="font-bold text-5xl pt-2 text-center">Football Central</h1>
    </div>
  );
}

export default Navbar;
