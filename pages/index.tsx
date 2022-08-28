import type { NextPage } from "next";
import Head from "next/head";
import Default from "../layouts/Default";

const Home: NextPage = () => {
  return (
    <div className="">
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
