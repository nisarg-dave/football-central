import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures, articles } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";
import Link from "next/link";

interface leagueProps {
  standings: leagueTable[];
  fixtures: fixtures[];
  articles: articles[];
}

function index({ standings, fixtures, articles }: leagueProps) {
  const truncate = (string: articles, n: number) => {
    string = string.body[0].children[0].text;
    // String might not be there hence ?
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1269059076597694470/YUsGePSz_400x400.jpg"
            alt="La Liga Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">La Liga</h1>
        </div>
        <div className="flex mt-3 mx-auto">
          {fixtures.map((fixture) => (
            <WidgetFixtureCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
        <div className="grid grid-cols-4 my-1 mx-auto">
          <div className="p-2 col-span-1">
            <WidgetLeagueTable standings={standings} />
          </div>
          <div className="col-span-2 p-2 h-[42rem] w-[35rem] scrollbar-hide overflow-y-scroll">
            <h1 className="text-xl text-center font-bold">
              FCBK&#39;s Blog Latest Articles
            </h1>
            {articles.slice(0, 4).map((article) => (
              <div className="p-2">
                <img src={article.mainImage} className="w-full" />
                <Link key={article._id} href="/">
                  <h1 className="font-bold text-lg hover:underline cursor-pointer">
                    {article.title}
                  </h1>
                </Link>
                <p className="text-sm">{truncate(article, 150)}</p>
              </div>
            ))}
          </div>
          <div className="w-72 col-span-1 p-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="LaLigaEN"
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
    `${process.env.BASE_URL}/api/football/laLiga/getStandings`
  );
  const standings = await standingsResponse.json();
  const fixturesResponse = await fetch(
    `${process.env.BASE_URL}/api/football/laLiga/getFixtures`
  );
  const fixtures = await fixturesResponse.json();
  const articlesResponse = await fetch(
    `${process.env.BASE_URL}/api/articles/getArticles`
  );
  const articles = await articlesResponse.json();
  return {
    props: {
      standings,
      fixtures,
      articles,
    },
  };
};
