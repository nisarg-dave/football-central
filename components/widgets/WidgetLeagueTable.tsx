import React from "react";
import { leagueTable } from "../../typings";

interface WidgetLeagueTableProps {
  standings: leagueTable[];
}

function WidgetLeagueTable({ standings }: WidgetLeagueTableProps) {
  return (
    <table className="bg-slate-300 w-full h-full">
      <thead>
        <tr>
          <th className="text-base">Team</th>
          <th className="text-base">Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing) => (
          <>
            <tr key={standing.position}>
              <td className="text-center flex justify-center">
                <p className="text-bold text-sm">{standing.position}.</p>
                <img
                  src={standing.clubLogo}
                  className="h-7 w-7 ml-2 rounded-full"
                  alt="Club Logo"
                />
              </td>
              <td>
                <p className="text-bold text-center text-sm">
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

export default WidgetLeagueTable;
