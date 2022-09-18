import React from "react";
import { fixtures } from "../../typings";

interface FixtureCardProps {
  fixture: fixtures;
}

function WidgetFixtureCard({ fixture }: FixtureCardProps) {
  return (
    <div className="w-24 h-12 mx-2 bg-slate-300">
      <div className="text-xs text-center font-bold">{fixture.date}</div>
      <div className="flex justify-between mt-1 p-1">
        <img src={fixture.homeTeamLogo} className="h-6 w-6 ml-2 rounded-full" />
        <p className="text-xs font-bold pt-1">v</p>
        <img src={fixture.awayTeamLogo} className="h-6 w-6 ml-2 rounded-full" />
      </div>
    </div>
  );
}

export default WidgetFixtureCard;
