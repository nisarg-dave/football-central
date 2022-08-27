import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <div className="grid grid-cols-3 border-b-2 bg-black border-black py-1.5 text-white">
      <Bars3Icon
        className="h-10 w-15 ml-5 cursor-pointer hover:bg-gray-100 hover:text-black rounded-full px-2 py-2"
        onClick={() => {}}
      />
      <h1 className="font-bold text-2xl pt-1 cols-span-2 text-center">
        Football Central
      </h1>
    </div>
  );
}

export default Navbar;
