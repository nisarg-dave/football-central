import { GetServerSideProps } from "next";
import React from "react";
import TwitterCard from "../../components/twitter/TwitterCard";
import Default from "../../layouts/Default";
import getDiMazrioTweets from "../../lib/twitter/italianClubs/getTweets";

import { Tweet } from "../../typings";

interface ItalianClubsProps {
  tweets: Tweet[];
}

function italianClubs({ tweets }: ItalianClubsProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1578668336648429572/LrI0BYJ2_400x400.jpg"
            alt="Di Marzio Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">
            Di Marzio (Italian Clubs)
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

export default italianClubs;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await getDiMazrioTweets();
  return {
    props: {
      tweets,
    },
  };
};
