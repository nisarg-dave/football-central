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
        <div className="flex flex-col">
          <div className="flex ml-2">
            <img
              className="w-32 h-32 rounded-full mt-1"
              src="https://pbs.twimg.com/profile_images/1572138661025570816/6mbw4KEQ_400x400.jpg"
              alt="Premier League Logo"
            />
            <h1 className="ml-4 text-4xl font-bold mt-12">League Table</h1>
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
    `${process.env.BASE_URL}/api/football/premierLeague/getStandings`
  );
  const standings = await standingsResponse.json();
  return {
    props: {
      standings,
    },
  };
};
