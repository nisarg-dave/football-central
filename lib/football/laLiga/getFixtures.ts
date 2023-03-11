import footballRequests from "../../../utils/footballRequests";

const dateTimeConvert = (dateTime: string) => {
  const dt = new Date(dateTime);
  return dt.toDateString();
};

export default async function getLaLigaFixtures() {
  const response = await fetch(
    `${process.env.SPORTS_BASE_URL}` +
      `${footballRequests.laLigaRequests.fetchFixtures}`,
    {
      headers: {
        "x-rapidapi-host": `${process.env.SPORTS_HOST}`,
        "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  const fixturesArr = data.response.map((obj: any) => {
    const id = obj?.fixture?.id;
    const date = dateTimeConvert(obj?.fixture?.date);
    const location = obj?.fixture?.venue?.name;
    const status = obj?.fixture?.status?.short;
    const homeTeamLogo = obj?.teams?.home?.logo;
    const homeTeamGoals = obj?.goals?.home;
    const awayTeamLogo = obj?.teams?.away?.logo;
    const awayTeamGoals = obj?.goals?.away;
    return {
      id,
      date,
      location,
      status,
      homeTeamLogo,
      homeTeamGoals,
      awayTeamLogo,
      awayTeamGoals,
    };
  });
  return fixturesArr;
}
