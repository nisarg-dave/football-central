export interface leagueTable {
  position: number;
  clubLogo: string;
  clubName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  points: number;
}

export interface fixtures {
  id: number;
  date: string;
  location: string;
  status: string;
  homeTeamLogo: string;
  homeTeamGoals: string;
  awayTeamLogo: string;
  awayTeamGoals: string;
}

interface articleBody {
  _key: string;
  _type: string;
  children: { _key: string; _type: string; marks: string[]; text: string }[];
  marksDefs: [];
  style: string;
}

export interface articles {
  _id: string;
  title: string;
  authorName: string;
  mainImage: string;
  categoryName: string;
  slug: string;
  publishedAt: string;
  body: articleBody[];
  barcaFixture?: string;
}

export interface statistics {
  homeTeam: string | null;
  homeTeamTotalShots: number | null;
  homeTeamShotsOnTarget: number | null;
  homeTeamPossession: string | null;
  homeTeamPasses: number | null;
  homeTeamPassAccuracy: string | null;
  homeTeamFouls: number | null;
  homeTeamYellowCards: number | null;
  homeTeamRedCards: number | null;
  homeTeamOffsides: number | null;
  homeCorners: number | null;
  awayTeam: string | null;
  awayTeamTotalShots: number | null;
  awayTeamShotsOnTarget: number | null;
  awayTeamPossession: string | null;
  awayTeamPasses: number | null;
  awayTeamPassAccuracy: string | null;
  awayTeamFouls: number | null;
  awayTeamYellowCards: number | null;
  awayTeamRedCards: number | null;
  awayTeamOffsides: number | null;
  awayCorners: number | null;
}

export interface Tab {
  name: string;
  active: boolean;
}
