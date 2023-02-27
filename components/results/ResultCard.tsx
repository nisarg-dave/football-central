import React from "react";
import { fixtures } from "../../typings";

interface ResultCardProps {
  result: fixtures;
}

function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="bg-slate-300 w-full h-40 sm:h-48 md:h-56 mx-auto">
      <div className="flex items-center justify-around mt-2">
        <img
          src={result.homeTeamLogo}
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
        />
        <h2 className="text-base sm:text-lg md:text-xl">
          {result.homeTeamGoals}
        </h2>
        <h2 className="text-base sm:text-lg md:text-xl">-</h2>
        <h2 className="text-base sm:text-lg md:text-xl">
          {result.awayTeamGoals}
        </h2>
        <img
          src={result.awayTeamLogo}
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
        />
      </div>
      <div className="flex items-center flex-col">
        <h5 className="mb-2 text-sm sm:text-base md:text-lg">
          {result.status}
        </h5>
        <h3 className="text-sm sm:text-base md:text-lg">{result.location}</h3>
        <h5 className="text-sm sm:text-base md:text-lg">{result.date}</h5>
      </div>
    </div>
  );
}

export default ResultCard;
