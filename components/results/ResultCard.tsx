import React from "react";
import { fixtures } from "../../typings";

interface ResultCardProps {
  result: fixtures;
}

function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="bg-slate-300 w-full h-60 mx-auto">
      <div className="flex items-center justify-around mt-2">
        <img src={result.homeTeamLogo} className="h-24 w-24" />
        <h2 className="text-xl">{result.homeTeamGoals}</h2>
        <h2 className="text-xl">-</h2>
        <h2 className="text-xl">{result.awayTeamGoals}</h2>
        <img src={result.awayTeamLogo} className="h-24 w-24" />
      </div>
      <div className="flex items-center flex-col">
        <h5 className="mb-2 text-lg">{result.status}</h5>
        <h3 className="text-lg">{result.location}</h3>
        <h5 className="text-lg">{result.date}</h5>
      </div>
    </div>
  );
}

export default ResultCard;
