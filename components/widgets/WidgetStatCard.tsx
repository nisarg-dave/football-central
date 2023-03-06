import React, { useEffect, useState } from "react";
import getBarcaStats from "../../lib/football/laLiga/getBarcaStats";
import { statistics } from "../../typings";

interface StatsCardProps {
  fixtureId: string;
}

function WidgetStatCard({ fixtureId }: StatsCardProps) {
  const [stats, setStats] = useState<statistics>();
  useEffect(() => {
    const fetchData = async () => {
      const id = parseInt(fixtureId.split(",")[2]);

      const statsRes: statistics = await getBarcaStats(id);
      setStats(statsRes);
    };
    fetchData();
  }, [fixtureId, getBarcaStats]);
  return (
    <div className="bg-slate-300 flex flex-col py-2 px-4 mt-2">
      <div className="flex justify-between my-2">
        <p className="text-base font-bold">{stats?.homeTeam}</p>
        <p className="text-base font-bold">Team Stats</p>
        <p className="text-base font-bold">{stats?.awayTeam}</p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base text-center">
          {stats?.homeTeamTotalShots ? stats?.homeTeamTotalShots : 0}
        </p>
        <p className="text-base">Shots</p>
        <p className="text-base">
          {stats?.awayTeamTotalShots ? stats?.awayTeamTotalShots : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamShotsOnTarget ? stats?.homeTeamShotsOnTarget : 0}
        </p>
        <p className="text-base">Shots On Target</p>
        <p className="text-base">
          {stats?.awayTeamShotsOnTarget ? stats?.awayTeamShotsOnTarget : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamPossession ? stats?.homeTeamPossession : 0}
        </p>
        <p className="text-base">Possession</p>
        <p className="text-base">
          {stats?.awayTeamPossession ? stats?.awayTeamPossession : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamPasses ? stats?.homeTeamPasses : 0}
        </p>
        <p className="text-base">Passes</p>
        <p className="text-base">
          {stats?.awayTeamPasses ? stats?.awayTeamPasses : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamPassAccuracy ? stats?.homeTeamPassAccuracy : 0}
        </p>
        <p className="text-base">Passe Accuracy</p>
        <p className="text-base">
          {stats?.awayTeamPassAccuracy ? stats?.awayTeamPassAccuracy : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamFouls ? stats?.homeTeamFouls : 0}
        </p>
        <p className="text-base">Fouls</p>
        <p className="text-base">
          {stats?.awayTeamFouls ? stats?.awayTeamFouls : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamYellowCards ? stats?.homeTeamYellowCards : 0}
        </p>
        <p className="text-base">Yellow Cards</p>
        <p className="text-base">
          {stats?.awayTeamYellowCards ? stats?.awayTeamYellowCards : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamRedCards ? stats?.homeTeamRedCards : 0}
        </p>
        <p className="text-base">Red Cards</p>
        <p className="text-base">
          {stats?.awayTeamRedCards ? stats?.awayTeamRedCards : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeTeamOffsides ? stats?.homeTeamOffsides : 0}
        </p>
        <p className="text-base">Offsides</p>
        <p className="text-base font">
          {stats?.awayTeamOffsides ? stats?.awayTeamOffsides : 0}
        </p>
      </div>
      <div className="flex justify-between my-2">
        <p className="text-base">
          {stats?.homeCorners ? stats?.homeCorners : 0}
        </p>
        <p className="text-base">Corners</p>
        <p className="text-base">
          {stats?.awayCorners ? stats?.awayCorners : 0}
        </p>
      </div>
    </div>
  );
}

export default WidgetStatCard;
