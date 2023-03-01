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
          <th className="text-lg">Position</th>
          <th className="text-lg">Club</th>
          <th className="text-lg">Played</th>
          <th className="text-lg">Won</th>
          <th className="text-lg">Drawn</th>
          <th className="text-lg">Lost</th>
          <th className="text-lg">Goals For</th>
          <th className="text-lg">Goals Against</th>
          <th className="text-lg">Goal Difference</th>
          <th className="text-lg">Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing) => (
          <>
            <tr key={standing.position}>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.position}
                </p>
              </td>
              <td className="flex">
                <img
                  src={standing.clubLogo}
                  className="h-8 w-8"
                  alt="Club Logo"
                />
                <p className="text-bold text-base pt-1 pl-2">
                  {standing.clubName}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.played}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.won}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.drawn}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.lost}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.goalsFor}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.goalsAgainst}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
                  {standing.goalsDifference}
                </p>
              </td>
              <td>
                <p className="text-bold text-center text-base">
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
