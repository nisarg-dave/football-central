// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fixtures } from "../../../../typings";
import footballRequests from "../../../../utils/footballRequests";

const dateTimeConvert = (dateTime: string) => {
  const dt = new Date(dateTime);
  return dt.toDateString();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<fixtures[]>
) {
  const query = req.query;
  const { fixture: fixtureId } = query;
  console.log(fixtureId);
  const response = await fetch(
    `${process.env.SPORTS_BASE_URL}` +
      `${footballRequests.laLigaRequests.fetchStats}` +
      `?id=${fixtureId}`,
    {
      headers: {
        "x-rapidapi-host": `${process.env.SPORTS_HOST}`,
        "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  const { statistics } = data.response[0];
  const homeTeamShotsOnTarget = statistics[0]?.statistics[0]?.value;
  const homeTeamToalShots = statistics[0]?.statistics[2]?.value;
  const homeTeamFouls = statistics[0]?.statistics[6]?.value;
  const homeCorners = statistics[0]?.statistics[7]?.value;
  const homeTeamPossession = statistics[0]?.statistics[9]?.value;
  const awayTeamShotsOnTarget = statistics[1]?.statistics[0]?.value;
  const awayTeamToalShots = statistics[1]?.statistics[2]?.value;
  const awayTeamFouls = statistics[1]?.statistics[6]?.value;
  const awayCorners = statistics[1]?.statistics[7]?.value;
  const awayTeamPossession = statistics[1]?.statistics[9]?.value;

  const stats = {
    homeTeamShotsOnTarget,
    homeTeamToalShots,
    homeTeamFouls,
    homeCorners,
    homeTeamPossession,
    awayTeamShotsOnTarget,
    awayTeamToalShots,
    awayTeamFouls,
    awayCorners,
    awayTeamPossession,
  };
  const statsArr = [stats];
  res.status(200).json(statsArr);
}
