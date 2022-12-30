import type { NextPage } from "next";
import Head from "next/head";
import Default from "../layouts/Default";

const Home: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Football Central</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Default>
  );
};

export default Home;
