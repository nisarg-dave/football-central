const footballRequests = {
  laLigaRequests: {
    fetchStandings: "/standings?league=140&season=2022",
    fetchResults: "/fixtures?league=140&season=2022&last=9",
    fetchFixtures: "/fixtures?league=140&season=2022&next=8",
    fetchStats: "/fixtures",
  },
  premierLeagueRequests: {
    fetchStandings: "/standings?league=39&season=2022",
    fetchResults: "/fixtures?league=39&season=2022&last=9",
    fetchFixtures: "/fixtures?league=39&season=2022&next=8",
  },
  serieARequests: {
    fetchStandings: "/standings?league=135&season=2022",
    fetchResults: "/fixtures?league=135&season=2022&last=9",
    fetchFixtures: "/fixtures?league=135&season=2022&next=8",
  },
  bundesligaRequests: {
    fetchStandings: "/standings?league=78&season=2022",
    fetchResults: "/fixtures?league=78&season=2022&last=9",
    fetchFixtures: "/fixtures?league=78&season=2022&next=8",
  },
  ligueUnRequests: {
    fetchStandings: "/standings?league=61&season=2022",
    fetchResults: "/fixtures?league=61&season=2022&last=9",
    fetchFixtures: "/fixtures?league=61&season=2022&next=8",
  },
  championsLeagueRequests: {
    fetchStandings: "/standings?league=2&season=2022",
    fetchResults: "/fixtures?league=2&season=2022&last=9",
    fetchFixtures: "/fixtures?league=2&season=2022&next=8",
  },
};

export default footballRequests;

// La Liga -> 140
// Champions Leaue -> 2
// Europa League -> 3
// Super Cup -> 556
// Copa Del Ray -> 143
