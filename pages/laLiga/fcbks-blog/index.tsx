import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Default from "../../../layouts/Default";
import { articles, Tab } from "../../../typings";
import Tabs from "../../../components/widgets/Tabs";
import { useTabs, useSetActiveTab } from "../../../store/store";
import getArticles from "../../../lib/articles/getArticles";

interface fCBkHomeProps {
  articles: articles[];
}

function Index({ articles }: fCBkHomeProps) {
  const [displayedArticles, setDisplayedArticles] = useState<articles[]>([]);
  const tabs = useTabs();
  const setActiveTab = useSetActiveTab();

  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab && activeTab.name !== "All Posts") {
      const filteredArticles = articles.filter(
        (article) => article.categoryName === activeTab.name
      );
      setDisplayedArticles(filteredArticles);
    } else {
      setActiveTab("All Posts");
      setDisplayedArticles(articles);
    }
  }, [articles, setActiveTab]);

  const handleSelectedTab = (selectedTab: Tab) => {
    setActiveTab(selectedTab.name);
    if (selectedTab.name !== "All Posts") {
      const filteredArticles = articles.filter(
        (article) => article.categoryName === selectedTab.name
      );
      setDisplayedArticles(filteredArticles);
    } else {
      setDisplayedArticles(articles);
    }
  };

  return (
    <Default>
      <div className="flex items-center flex-col">
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

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getArticles();
  return {
    props: {
      articles,
    },
  };
};
