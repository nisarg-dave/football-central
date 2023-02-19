import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

interface sideProps {
  showSide: boolean;
}

function Sidebar({ showSide }: sideProps) {
  const [premDropDown, setPremDropDown] = useState(false);
  const [laLigaDropDown, setLaLigaDropDown] = useState(false);
  const [serieADropDown, setSerieADropDown] = useState(false);
  const [ligueUnDropDown, setLigueUnDropDown] = useState(false);
  const [bundesligaDropDown, setBundesligaDropDown] = useState(false);
  const [championsLeagueDropDown, setChampionsLeagueDropDown] = useState(false);
  const [transferDropDown, setTransferDropDown] = useState(false);
  const router = useRouter();

  return (
    <div
      className={
        showSide
          ? "border-black bg-black text-yellow-300 md:w-60 md:flex md:flex-col md:flex-none sidenav w-full"
          : "hidden sidenav"
      }
    >
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-xl">
        <div className="flex justify-between">
          Premier League
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setPremDropDown(!premDropDown)}
          />
        </div>
        {premDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/premierLeague")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/premierLeague/standings")}
            >
              Standings
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/premierLeague/results")}
            >
              Results
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-xl">
        <div className="flex justify-between">
          La Liga
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setLaLigaDropDown(!laLigaDropDown)}
          />
        </div>
        {laLigaDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/laLiga")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/laLiga/standings")}
            >
              Standings
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/laLiga/results")}
            >
              Results
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/laLiga/fcbks-blog")}
            >
              FCBK&#39;s Blog
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-xl">
        <div className="flex justify-between">
          Serie A
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setSerieADropDown(!serieADropDown)}
          />
        </div>
        {serieADropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/serieA")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/serieA/standings")}
            >
              Standings
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/serieA/results")}
            >
              Results
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-xl">
        <div className="flex justify-between">
          Ligue Un
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setLigueUnDropDown(!ligueUnDropDown)}
          />
        </div>
        {ligueUnDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/ligueUn")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/ligueUn/standings")}
            >
              Standings
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/ligueUn/results")}
            >
              Results
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-xl">
        <div className="flex justify-between">
          Bundesliga
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setBundesligaDropDown(!bundesligaDropDown)}
          />
        </div>
        {bundesligaDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/bundesliga")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/bundesliga/standings")}
            >
              Standings
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/bundesliga/results")}
            >
              Results
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black text-xl">
        <div className="flex justify-between">
          Champions League
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setChampionsLeagueDropDown(!championsLeagueDropDown)}
          />
        </div>
        {championsLeagueDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/championsLeague")}
            >
              Home
            </p>
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/championsLeague/results")}
            >
              Results
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="border-y border-yellow-300 py-2 px-1 hover:bg-yellow-300 hover:text-black hover:border-black text-xl">
        <div className="flex justify-between">
          Transfer News
          <ChevronDownIcon
            className="h-8 w-8 rounded-full px-2 py-2 cursor-pointer hover:bg-black hover:text-yellow-300"
            onClick={() => setTransferDropDown(!transferDropDown)}
          />
        </div>
        {transferDropDown ? (
          <div className="cursor-pointer text-base">
            <p
              className="pl-2 hover:bg-slate-300"
              onClick={() => router.push("/transferNews")}
            >
              Home
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Sidebar;
