import type { NextPage } from "next";
import Head from "next/head";
import Default from "../layouts/Default";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Default>
      <Head>
        <title>Football Central</title>
        <link rel="icon" href="https://freesvg.org/img/soccer_ball2.png" />
      </Head>
      <div className="gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1572138661025570816/6mbw4KEQ_400x400.jpg"
          alt="Premier League Logo"
          onClick={() => router.push("/premierLeague")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1678328246264373249/-CYYhwl9_400x400.jpg"
          alt="La Liga Logo"
          onClick={() => router.push("/laLiga")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1540266057084112902/0KsmkG2O_400x400.jpg"
          alt="Serie A Logo"
          onClick={() => router.push("/serieA")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1658979184968978433/wg4qEeZz_400x400.jpg"
          alt="Ligue Un Logo"
          onClick={() => router.push("/ligueUn")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1500628606988558343/MLN0_jMP_400x400.jpg"
          alt="Bundesliga Logo"
          onClick={() => router.push("/bundesliga")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1417052605776375813/Jc9RL5o7_400x400.jpg"
          alt="Champions League Logo"
          onClick={() => router.push("/championsLeague")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://c4.wallpaperflare.com/wallpaper/639/159/622/soccer-fc-barcelona-logo-wallpaper-preview.jpg"
          alt="FCBK Logo"
          onClick={() => router.push("/laLiga/fcbks-blog")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
          alt="Transfer Logo"
          onClick={() => router.push("/transferNews")}
        />
      </div>
    </Default>
  );
};

export default Home;
