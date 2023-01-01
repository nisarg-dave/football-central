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
