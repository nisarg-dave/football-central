import React from "react";
import { fixtures } from "../../typings";

interface FixtureCardProps {
  fixture: fixtures;
}

function WidgetFixtureCard({ fixture }: FixtureCardProps) {
  return (
    <div className="w-44 h-28 mx-2 bg-slate-300">
      <div className="text-xl text-center font-bold">{fixture.date}</div>
      <div className="flex justify-between mt-1 p-1">
        <img src={fixture.homeTeamLogo} className="h-16 w-16 ml-2" />
        <p className="text-xl font-bold pt-5">v</p>
        <img src={fixture.awayTeamLogo} className="h-16 w-16 ml-2" />
      </div>
    </div>
  );
}

export default WidgetFixtureCard;
