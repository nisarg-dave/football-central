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

export interface articles extends articleBody {
  _id: string;
  _createdAt: string;
  _rev: string;
  _type: "article";
}

export type articleBody = {
  title: string;
  author: string;
  mainImage: string;
  categories: string;
  publishedAt: string;
  body: string;
};
