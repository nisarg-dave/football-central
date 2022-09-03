import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="border-b-2 bg-black border-black py-1.5 text-yellow-300 grid grid-cols-3">
      <div className="col-span-1">
        <img
          className="h-10 w-10 ml-3 rounded-full cursor-pointer"
          src="https://freesvg.org/img/soccer_ball2.png"
          alt="Football Logo"
          onClick={() => router.push("/")}
        />
      </div>
      <h1 className="font-bold text-2xl pt-1 text-center">Football Central</h1>
    </div>
  );
}

export default Navbar;
