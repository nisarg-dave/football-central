import { GetServerSideProps } from "next";
import React from "react";
import LeagueTable from "../../components/table/LeagueTable";
import Default from "../../layouts/Default";
import { leagueTable } from "../../typings";

interface standingsProps {
  standings: leagueTable[];
}

function standings({ standings }: standingsProps) {
  return (
    <div>
      <Default>
        <div className="flex flex-col bg-yellow-200">
          <div className="flex ml-2">
            <img
              className="w-20 h-20 rounded-full mt-1"
              src="https://pbs.twimg.com/profile_images/1531926859604271104/MAUCnkLp_400x400.jpg"
              alt="Ligue Un Logo"
            />
            <h1 className="ml-4 text-2xl font-bold mt-7">League Table</h1>
          </div>
          <div className="flex flex-row px-4 mt-4">
            <LeagueTable standings={standings} />
          </div>
        </div>
      </Default>
    </div>
  );
}

export default standings;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const standingsResponse = await fetch(
    `${process.env.BASE_URL}/api/football/ligueUn/getStandings`
  );
  const standings = await standingsResponse.json();
  return {
    props: {
      standings,
    },
  };
};
