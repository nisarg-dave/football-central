import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";
import getBundesligaStandings from "../../lib/football/bundesliga/getStandings";
import getBundesligaFixtures from "../../lib/football/bundesliga/getFixtures";

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
            src="https://pbs.twimg.com/profile_images/1500628606988558343/MLN0_jMP_400x400.jpg"
            alt="Bundesliga Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">Bundesliga</h1>
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
              screenName="GGFN_"
              options={{ height: 670 }}
            />
          </div>
          <div className="w-72 col-span-1 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Bundesliga_EN"
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
  const standings = await getBundesligaStandings();
  const fixtures = await getBundesligaFixtures();
  return {
    props: {
      standings,
      fixtures,
    },
  };
};
