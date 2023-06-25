import React from "react";
import Default from "../../layouts/Default";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function fabrizioRomano() {
  return (
    <Default>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            className="w-20 h-20 rounded-full mt-1"
            src="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
            alt="Fabrizio Romano Logo"
          />
          <h1 className="ml-4 text-2xl font-bold mt-7">Here We Go</h1>
        </div>
        <div className="min-w-screen sm:mx-96 p-6">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="FabrizioRomano"
            options={{ height: 800 }}
          />
        </div>
      </div>
    </Default>
  );
}

export default fabrizioRomano;
