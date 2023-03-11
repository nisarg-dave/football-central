import { GetServerSideProps } from "next";
import React from "react";
import LeagueTable from "../../components/table/LeagueTable";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import Default from "../../layouts/Default";
import getBundesligaStandings from "../../lib/football/bundesliga/getStandings";
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
              className="w-20 h-20 rounded-full mt-1"
              src="https://pbs.twimg.com/profile_images/1500628606988558343/MLN0_jMP_400x400.jpg"
              alt="Bundesliga Logo"
            />
            <h1 className="ml-4 text-2xl font-bold mt-7">League Table</h1>
          </div>
          <div className="flex flex-row px-4 mt-4">
            <div className="hidden md:flex w-full">
              <LeagueTable standings={standings} />
            </div>
            <div className="md:hidden flex w-full">
              <WidgetLeagueTable standings={standings} />
            </div>
          </div>
        </div>
      </Default>
    </div>
  );
}

export default standings;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const standings = await getBundesligaStandings();
  return {
    props: {
      standings,
    },
  };
};
