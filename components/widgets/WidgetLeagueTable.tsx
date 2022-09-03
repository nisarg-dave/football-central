import React from "react";
import { leagueTable } from "../../typings";

interface WidgetLeagueTableProps {
  standings: leagueTable[];
}

function WidgetLeagueTable({ standings }: WidgetLeagueTableProps) {
  return (
    <table className="table-auto bg-red-400 w-full">
      <thead>
        <tr>
          <th>Team</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((standing) => (
          <>
            <tr key={standing.position}>
              <td className="text-center flex justify-center">
                <p className="text-bold">{standing.position}.</p>
                <img
                  src={standing.clubLogo}
                  className="h-8 w-8 ml-2 rounded-full"
                />
              </td>
              <td>
                <p className="text-bold text-center">{standing.points}</p>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default WidgetLeagueTable;
