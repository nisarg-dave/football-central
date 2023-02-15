import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <header className="bg-black border-black py-1.5 text-yellow-300 flex items-center h-16 min-w-screen nav">
      <nav className="w-60">
        <img
          className="h-12 w-12 ml-3 rounded-full cursor-pointer"
          src="https://freesvg.org/img/soccer_ball2.png"
          alt="Football Logo"
          onClick={() => router.push("/")}
        />
      </nav>
      <div className="w-full justify-center flex">
        <h1 className="font-bold text-4xl pt-2">Football Central</h1>
      </div>
    </header>
  );
}

export default Navbar;
