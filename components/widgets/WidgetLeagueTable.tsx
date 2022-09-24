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
          <th className="text-xl">Team</th>
          <th className="text-xl">Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing) => (
          <>
            <tr key={standing.position}>
              <td className="text-center flex justify-center">
                <p className="text-bold text-xl">{standing.position}.</p>
                <img
                  src={standing.clubLogo}
                  className="h-7 w-7 ml-2 rounded-full"
                />
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

export default WidgetLeagueTable;
