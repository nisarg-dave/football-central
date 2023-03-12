import { GetServerSideProps } from "next";
import React from "react";
import TwitterCard from "../../components/twitter/TwitterCard";
import Default from "../../layouts/Default";
import getChristianFalkTweets from "../../lib/twitter/germanClubs/getTweets";

import { Tweet } from "../../typings";

interface GermanClubsProps {
  tweets: Tweet[];
}

function germanClubs({ tweets }: GermanClubsProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1367085330327830528/dTCWjSc0_400x400.jpg"
            alt="Christian Falk Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">
            Christian Falk (German Clubs)
          </h1>
        </div>
        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-3 md:p-4 gap-4">
          {tweets.map((tweet) => (
            <TwitterCard tweet={tweet} />
          ))}
        </div>
      </div>
    </Default>
  );
}

export default germanClubs;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await getChristianFalkTweets();
  return {
    props: {
      tweets,
    },
  };
};
