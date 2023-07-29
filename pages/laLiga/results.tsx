import { GetServerSideProps } from "next";
import React from "react";
import ResultCard from "../../components/results/ResultCard";
import Default from "../../layouts/Default";
import getLaLigaResults from "../../lib/football/laLiga/getResults";
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
              src="https://pbs.twimg.com/profile_images/1678328246264373249/-CYYhwl9_400x400.jpg"
              alt="La Liga Logo"
            />
            <h1 className="ml-4 text-2xl font-bold mt-7">Results</h1>
          </div>
          <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-3 md:p-4 gap-4">
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
  const results = await getLaLigaResults();
  return {
    props: {
      results,
    },
  };
};
