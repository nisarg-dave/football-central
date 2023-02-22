import React from "react";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface navProps {
  toggleSideNav: () => void;
}

function Navbar({ toggleSideNav }: navProps) {
  const router = useRouter();
  return (
    <header className="bg-black border-black py-1.5 text-yellow-300 flex items-center h-16 nav">
      <Bars3Icon
        className="h-12 w-12 ml-3 rounded-full px-2 py-2 cursor-pointer text-yellow-300 md:hidden"
        onClick={toggleSideNav}
      />
      <nav className="hidden md:w-60 md:block">
        <img
          className="h-12 w-12 ml-3 rounded-full cursor-pointer"
          src="https://freesvg.org/img/soccer_ball2.png"
          alt="Football Logo"
          onClick={() => router.push("/")}
        />
      </nav>
      <div className="w-full justify-center flex">
        <h1 className="font-bold text-2xl md:text-4xl md:pt-2">
          Football Central
        </h1>
      </div>
    </header>
  );
}

export default Navbar;
