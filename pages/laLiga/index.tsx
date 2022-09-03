import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import { leagueTable } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";

interface laLigaStandings {
  standings: leagueTable[];
}

function index({ standings }: laLigaStandings) {
  return (
    <Default>
      <div className="flex flex-col bg-yellow-200 h-screen">
        <div className="flex ml-2">
          <img
            className="w-14 h-14 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1269059076597694470/YUsGePSz_400x400.jpg"
            alt="La Liga Logo"
          />
          <h1 className="ml-2 text-xl font-bold mt-4">La Liga</h1>
        </div>
        <div className="flex"> Embala Carousel Fixtures</div>
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <WidgetLeagueTable standings={standings} />
          </div>
          <div className="col-span-4">Hello</div>
          <div className="col-span-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="LaLigaEN"
              options={{ height: 570 }}
            />
          </div>
        </div>
      </div>
    </Default>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/football/laLiga/getStandings`
  );
  const standings = await response.json();
  return {
    props: {
      standings,
    },
  };
};