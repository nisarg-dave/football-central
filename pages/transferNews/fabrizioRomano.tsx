import { GetServerSideProps } from "next";
import React from "react";
import TwitterCard from "../../components/twitter/TwitterCard";
import Default from "../../layouts/Default";
import getFabsTweets from "../../lib/twitter/fabrizioRomano/getTweets";
import { Tweet } from "../../typings";

interface fabrizioProps {
  tweets: Tweet[];
}

function fabrizioRomano({ tweets }: fabrizioProps) {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex ml-2">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
            alt="Fabrizio Romano Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">Here We Go</h1>
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

export default fabrizioRomano;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await getFabsTweets();
  return {
    props: {
      tweets,
    },
  };
};
