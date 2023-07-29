import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";
import getLigueUnFixtures from "../../lib/football/ligueUn/getFixtures";
import getLigueUnStandings from "../../lib/football/ligueUn/getStandings";

interface leagueProps {
  standings: leagueTable[];
  fixtures: fixtures[];
}

function index({ standings, fixtures }: leagueProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1658979184968978433/wg4qEeZz_400x400.jpg"
            alt="Ligue Un Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">Ligue Un</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-3 mx-auto">
          {fixtures.map((fixture) => (
            <WidgetFixtureCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
        <div className="md:grid md:grid-cols-4 md:my-1 md:mx-auto hidden">
          <div className="p-2 col-span-1">
            <WidgetLeagueTable standings={standings} />
          </div>
          <div className="col-span-2 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="GFFN"
              options={{ height: 670 }}
            />
          </div>
          <div className="w-72 col-span-1 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Ligue1_ENG"
              options={{ height: 670 }}
            />
          </div>
        </div>
      </div>
    </Default>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const standings = await getLigueUnStandings();
  const fixtures = await getLigueUnFixtures();

  return {
    props: {
      standings,
      fixtures,
    },
  };
};
