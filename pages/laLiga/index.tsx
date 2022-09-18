import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";

interface laLigaProps {
  standings: leagueTable[];
  fixtures: fixtures[];
}

function Index({ standings, fixtures }: laLigaProps) {
  return (
    <Default>
      <div className="flex flex-col w-full">
        <div className="flex ml-2">
          <img
            className="w-14 h-14 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1269059076597694470/YUsGePSz_400x400.jpg"
            alt="La Liga Logo"
          />
          <h1 className="ml-2 text-lg font-bold mt-4">La Liga</h1>
        </div>
        <div className="flex pt-2 ml-3">
          {fixtures.map((fixture) => (
            <WidgetFixtureCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
        <div className="grid grid-cols-10 mt-1">
          <div className="p-2 col-span-2">
            <WidgetLeagueTable standings={standings} />
          </div>
          <div className="col-span-5"></div>
          <div className="w-60 col-span-2 ml-9">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="LaLigaEN"
              options={{ height: 550 }}
            />
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const standingsResponse = await fetch(
    `${process.env.BASE_URL}/api/football/laLiga/getStandings`
  );
  const standings = await standingsResponse.json();
  const fixturesResponse = await fetch(
    `${process.env.BASE_URL}/api/football/laLiga/getFixtures`
  );
  const fixtures = await fixturesResponse.json();
  return {
    props: {
      standings,
      fixtures,
    },
  };
};
