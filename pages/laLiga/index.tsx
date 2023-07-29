import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import type { GetServerSideProps } from "next";
import { leagueTable, fixtures, articles } from "../../typings";
import WidgetLeagueTable from "../../components/widgets/WidgetLeagueTable";
import WidgetFixtureCard from "../../components/widgets/WidgetFixtureCard";
import Link from "next/link";
import getLaLigaStandings from "../../lib/football/laLiga/getStandings";
import getLaLigaFixtures from "../../lib/football/laLiga/getFixtures";
import getArticles from "../../lib/articles/getArticles";

interface leagueProps {
  standings: leagueTable[];
  fixtures: fixtures[];
  articles: articles[];
}

function index({ standings, fixtures, articles }: leagueProps) {
  const truncate = (text: string, n: number) => {
    // String might not be there hence ?
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1678328246264373249/-CYYhwl9_400x400.jpg"
            alt="La Liga Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">La Liga</h1>
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
          <div className="col-span-2 p-2 h-[42rem] w-[35rem] scrollbar-hide overflow-y-scroll">
            <h1 className="text-xl text-center font-bold">
              FCBK&#39;s Blog Latest Articles
            </h1>
            {articles.slice(0, 4).map((article) => (
              <div className="p-2" key={article._id}>
                <img
                  src={article.mainImage}
                  className="w-full"
                  alt="Article Main Image"
                />
                <Link href={`laLiga/fcbks-blog/${article.slug}`}>
                  <h1 className="font-bold text-lg hover:underline cursor-pointer">
                    {article.title}
                  </h1>
                </Link>
                <p className="text-sm">
                  {truncate(article?.body?.[3]?.children?.[0]?.text, 150)}
                </p>
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
  const standings = await getLaLigaStandings();
  const fixtures = await getLaLigaFixtures();

  const articles = await getArticles();
  return {
    props: {
      standings,
      fixtures,
      articles,
    },
  };
};
