import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="w-48 h-screen border-r-2 border-black bg-black text-yellow-300 flex flex-col ">
      <span className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-base flex justify-between">
        Premier League
        <ChevronDownIcon className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300" />
      </span>
      <span className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-base flex justify-between">
        La Liga
        <ChevronDownIcon className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300" />
      </span>
      <span className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-base flex justify-between">
        Transfer News
        <ChevronDownIcon className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300" />
      </span>
    </div>
  );
}
export default Sidebar;
