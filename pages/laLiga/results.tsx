import { GetServerSideProps } from "next";
import React from "react";
import ResultCard from "../../components/results/ResultCard";
import Default from "../../layouts/Default";
import { fixtures } from "../../typings";

interface resultsProps {
  results: fixtures[];
}

function results({ results }: resultsProps) {
  return (
    <div>
      <Default>
        <div className="flex flex-col">
          <div className="flex ml-2">
            <img
              className="w-20 h-20 rounded-full mt-1"
              src="https://pbs.twimg.com/profile_images/1610224492017508353/iDLuRHiC_400x400.jpg"
              alt="La Liga Logo"
            />
            <h1 className="ml-4 text-2xl font-bold mt-7">Results</h1>
          </div>
          <div className="grid grid-cols-3 p-4 gap-4">
            {results.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      </Default>
    </div>
  );
}

export default results;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resultsResponse = await fetch(
    `${process.env.BASE_URL}/api/football/laLiga/getResults`
  );
  const results = await resultsResponse.json();
  return {
    props: {
      results,
    },
  };
};
