import footballRequests from "../../../utils/footballRequests";

export default async function getPremStandings() {
  const response = await fetch(
    `${process.env.SPORTS_BASE_URL}` +
      `${footballRequests.premierLeagueRequests.fetchStandings}`,
    {
      headers: {
        "x-rapidapi-host": `${process.env.SPORTS_HOST}`,
        "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`,
      },
    }
  );
  const { response: data } = await response.json();
  const { standings } = data[0].league;
  const leagueTableArr = standings[0].map((obj: any) => {
    const position = obj?.rank;
    const clubLogo = obj?.team?.logo;
    const clubName = obj?.team?.name;
    const played = obj?.all?.played;
    const won = obj?.all?.win;
    const drawn = obj?.all?.draw;
    const lost = obj?.all?.lose;
    const goalsFor = obj?.all?.goals?.for;
    const goalsAgainst = obj?.all?.goals?.against;
    const goalsDifference = obj?.goalsDiff;
    const points = obj?.points;
    return {
      position,
      clubLogo,
      clubName,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalsDifference,
      points,
    };
  });
  return leagueTableArr;
}
