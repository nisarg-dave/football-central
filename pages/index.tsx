import type { NextPage } from "next";
import Head from "next/head";
import Default from "../layouts/Default";

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-200 h-screen">
      <Default>
        <Head>
          <title>Football Central</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Default>
    </div>
  );
};

export default Home;
