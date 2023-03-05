import footballRequests from "../../../utils/footballRequests";

export default async function getBarcaStats(fixtureId: number) {
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

  const { teams } = data.response[0];
  const homeTeam = teams?.home.name;
  const awayTeam = teams?.away.name;

  const { statistics } = data.response[0];
  const homeTeamTotalShots = statistics[0]?.statistics[2]?.value;
  const homeTeamShotsOnTarget = statistics[0]?.statistics[0]?.value;
  const homeTeamPossession = statistics[0]?.statistics[9]?.value;
  const homeTeamPasses = statistics[0]?.statistics[13]?.value;
  const homeTeamPassAccuracy = statistics[0]?.statistics[15]?.value;
  const homeTeamFouls = statistics[0]?.statistics[6]?.value;
  const homeTeamYellowCards = statistics[0]?.statistics[10]?.value;
  const homeTeamRedCards = statistics[0]?.statistics[11]?.value;
  const homeTeamOffsides = statistics[0]?.statistics[8]?.value;
  const homeCorners = statistics[0]?.statistics[7]?.value;
  const awayTeamTotalShots = statistics[1]?.statistics[2]?.value;
  const awayTeamShotsOnTarget = statistics[1]?.statistics[0]?.value;
  const awayTeamPossession = statistics[1]?.statistics[9]?.value;
  const awayTeamPasses = statistics[1]?.statistics[13]?.value;
  const awayTeamPassAccuracy = statistics[1]?.statistics[15]?.value;
  const awayTeamFouls = statistics[1]?.statistics[6]?.value;
  const awayTeamYellowCards = statistics[1]?.statistics[10]?.value;
  const awayTeamRedCards = statistics[1]?.statistics[11]?.value;
  const awayTeamOffsides = statistics[1]?.statistics[8]?.value;
  const awayCorners = statistics[1]?.statistics[7]?.value;

  const stats = {
    homeTeam,
    homeTeamTotalShots,
    homeTeamShotsOnTarget,
    homeTeamPossession,
    homeTeamPasses,
    homeTeamPassAccuracy,
    homeTeamFouls,
    homeTeamYellowCards,
    homeTeamRedCards,
    homeTeamOffsides,
    homeCorners,
    awayTeam,
    awayTeamTotalShots,
    awayTeamShotsOnTarget,
    awayTeamPossession,
    awayTeamPasses,
    awayTeamPassAccuracy,
    awayTeamFouls,
    awayTeamYellowCards,
    awayTeamRedCards,
    awayTeamOffsides,
    awayCorners,
  };

  return stats;
}