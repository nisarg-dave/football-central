import React from "react";
import { fixtures } from "../../typings";

interface FixtureCardProps {
  fixture: fixtures;
}

function WidgetFixtureCard({ fixture }: FixtureCardProps) {
  return (
    <div className="w-32 h-20 mx-2 bg-slate-300">
      <div className="text-sm text-center font-bold">{fixture.date}</div>
      <div className="flex justify-between mt-1 p-1">
        <img src={fixture.homeTeamLogo} className="h-10 w-10 ml-2" />
        <p className="text-xl font-bold pt-1 text-center">v</p>
        <img src={fixture.awayTeamLogo} className="h-10 w-160 ml-2" />
      </div>
    </div>
  );
}

export default WidgetFixtureCard;
