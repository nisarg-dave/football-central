import { GetServerSideProps } from "next";
import React from "react";
import TwitterCard from "../../components/twitter/TwitterCard";
import Default from "../../layouts/Default";
import getCityTweets from "../../lib/twitter/manchesterCity/getTweets";
import { Tweet } from "../../typings";

interface CityProps {
  tweets: Tweet[];
}

function manchesterCity({ tweets }: CityProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1344966114367991813/PVlXJ6Qg_400x400.jpg"
            alt="City Xtra Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">
            City Xtra (Manchester City)
          </h1>
        </div>
        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-3 md:p-4 gap-4">
          {tweets.map((tweet) => (
            <TwitterCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </Default>
  );
}

export default manchesterCity;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await getCityTweets();
  return {
    props: {
      tweets,
    },
  };
};
