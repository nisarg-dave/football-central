import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  const [premDropDown, setPremDropDown] = useState(false);
  const [laLigaDropDown, setLaLigaDropDown] = useState(false);
  const [transferDropDown, setTransferDropDown] = useState(false);

  return (
    <div className="w-48 h-screen border-r-2 border-black bg-black text-yellow-300 flex flex-col ">
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-base">
        <div className="flex justify-between">
          Premier League
          <ChevronDownIcon
            className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setPremDropDown(!premDropDown)}
          />
        </div>
        {premDropDown ? (
          <div className="cursor-pointer text-sm">
            <p className="pl-2 hover:bg-slate-300">Home</p>
            <p className="pl-2 hover:bg-slate-300">Standings</p>
            <p className="pl-2 hover:bg-slate-300">Fixtures</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-base">
        <div className="flex justify-between">
          La Liga
          <ChevronDownIcon
            className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setLaLigaDropDown(!laLigaDropDown)}
          />
        </div>
        {laLigaDropDown ? (
          <div className="cursor-pointer text-sm">
            <p className="pl-2 hover:bg-slate-300">Home</p>
            <p className="pl-2 hover:bg-slate-300">Standings</p>
            <p className="pl-2 hover:bg-slate-300">Fixtures</p>
            <p className="pl-2 hover:bg-slate-300">FCBKs Blog</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-base">
        <div className="flex justify-between">
          Transfer News
          <ChevronDownIcon
            className="h-7 w-7 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setTransferDropDown(!transferDropDown)}
          />
        </div>
        {transferDropDown ? (
          <div className="cursor-pointer text-sm">
            <p className="pl-2 hover:bg-slate-300">Home</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Sidebar;
