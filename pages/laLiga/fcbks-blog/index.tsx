import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Default from "../../../layouts/Default";
import { articles, Tab } from "../../../typings";
import Tabs from "../../../components/widgets/Tabs";

interface fCBkHomeProps {
  articles: articles[];
}

function index({ articles }: fCBkHomeProps) {
  const [displayedArticles, setDisplayedArticles] = useState<articles[]>([]);
  const [tabs, setTabs] = useState([
    {
      name: "All Posts",
      active: true,
    },
    {
      name: "Featured Articles",
      active: false,
    },
    {
      name: "Opinion",
      active: false,
    },
    {
      name: "Quick Updates",
      active: false,
    },
    {
      name: "Post-Match Reviews",
      active: false,
    },
  ]);
  useEffect(() => {
    setDisplayedArticles(articles);
  }, []);

  const handleSelectedTab = (newTabs: Tab[]) => {
    setTabs(newTabs);
    const { name: activeTab } = tabs.find((tab) => {
      if (tab.active) {
        return tab;
      }
    });
    if (activeTab && activeTab !== "All Posts") {
      const filteredArticles = articles.filter(
        (article) => article.categoryName === activeTab
      );
      setDisplayedArticles(filteredArticles);
    } else {
      setDisplayedArticles(articles);
    }
  };

  return (
    <Default>
      <div className="flex items-center flex-col bg-yellow-200">
        <h1 className="text-2xl mt-2 font-bold">FCBK&#39;s Blog</h1>
        <h2 className="text-lg mt-2 font-bold">
          By The Creators of BK&#39;s Blog
        </h2>
        <Tabs tabs={tabs} onClick={handleSelectedTab} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6">
          {displayedArticles.map((article) => (
            <Link key={article._id} href={`/laLiga/fcbks-blog/${article.slug}`}>
              <div className="border border-transparent rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-48 w-full object-cover group-hover:scale-105"
                  src={article.mainImage}
                  alt=""
                ></img>
                <div className="flex flex-col justify-between p-5">
                  <p className="text-base font-bold">{article.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Default>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const articlesResponse = await fetch(
    `${process.env.BASE_URL}/api/articles/getArticles`
  );
  const articles = await articlesResponse.json();
  return {
    props: {
      articles,
    },
  };
};
