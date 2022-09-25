import React from "react";
import { leagueTable } from "../../typings";

interface LeagueTableProps {
  standings: leagueTable[];
}
function LeagueTable({ standings }: LeagueTableProps) {
  return (
    <table className="bg-slate-300 w-full">
      <thead>
        <tr>
          <th className="text-2xl">Position</th>
          <th className="text-2xl">Club</th>
          <th className="text-2xl">Played</th>
          <th className="text-2xl">Won</th>
          <th className="text-2xl">Drawn</th>
          <th className="text-2xl">Lost</th>
          <th className="text-2xl">Goals For</th>
          <th className="text-2xl">Goals Against</th>
          <th className="text-2xl">Goal Difference</th>
          <th className="text-2xl">Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing) => (
          <>
            <tr key={standing.position}>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.position}
                </p>
              </td>
              <td className="flex">
                <img src={standing.clubLogo} className="h-10 w-10" />
                <p className="text-bold text-xl pt-2 pl-2">
                  {standing.clubName}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.played}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">{standing.won}</p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.drawn}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">{standing.lost}</p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.goalsFor}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.goalsAgainst}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.goalsDifference}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-xl">
                  {standing.points}
                </p>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default LeagueTable;
