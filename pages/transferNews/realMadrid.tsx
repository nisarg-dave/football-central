import { GetServerSideProps } from "next";
import React from "react";
import TwitterCard from "../../components/twitter/TwitterCard";
import Default from "../../layouts/Default";
import getMadridTweets from "../../lib/twitter/realMadrid/getTweets";

import { Tweet } from "../../typings";

interface MadridProps {
  tweets: Tweet[];
}

function realMadrid({ tweets }: MadridProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1543662848332677121/QHa-iUwo_400x400.jpg"
            alt="Madrid Xtra Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">
            Madrid Xtra (Real Madrid)
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

export default realMadrid;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await getMadridTweets();
  return {
    props: {
      tweets,
    },
  };
};
