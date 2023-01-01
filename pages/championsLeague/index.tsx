import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";

interface leagueProps {
  standings: leagueTable[];
  fixtures: fixtures[];
}

function index({ standings, fixtures }: leagueProps) {
  return (
    <Default>
      <div className="flex flex-col bg-yellow-200">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1417052605776375813/Jc9RL5o7_400x400.jpg"
            alt="Champions League Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">Champions League</h1>
        </div>
        <div className="flex mt-3 mx-auto">
          {fixtures.map((fixture) => (
            <WidgetFixtureCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
        <div className="grid grid-cols-4 my-1 mx-auto">
          <div className="p-2 col-span-1">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="EASPORTSFIFA"
              options={{ height: 670 }}
            />
          </div>
          <div className="col-span-2 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ChampionsLeague"
              options={{ height: 670 }}
            />
          </div>
          <div className="w-72 col-span-1 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="UEFAcom"
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
  const standingsResponse = await fetch(
    `${process.env.BASE_URL}/api/football/championsLeague/getStandings`
  );
  const standings = await standingsResponse.json();
  const fixturesResponse = await fetch(
    `${process.env.BASE_URL}/api/football/championsLeague/getFixtures`
  );
  const fixtures = await fixturesResponse.json();
  return {
    props: {
      standings,
      fixtures,
    },
  };
};
