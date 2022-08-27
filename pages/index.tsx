import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Football Central</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
