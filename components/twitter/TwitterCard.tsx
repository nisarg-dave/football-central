import React from "react";
import { Tweet } from "../../typings";

interface TwitterCardProps {
  tweet: Tweet;
}

function TwitterCard({ tweet }: TwitterCardProps) {
  const truncate = (text: string, n: number) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  return (
    <div className="bg-slate-300 w-full p-5 h-48 sm:h-56 md:h-64 mx-auto">
      <p>{truncate(tweet.text, 300)}</p>
    </div>
  );
}

export default TwitterCard;
