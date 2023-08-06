import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(12);
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
      setCurrentPage(0);
      setStartIndex(0);
      setEndIndex(12);
      setDisplayedArticles(filteredArticles);
    } else {
      setCurrentPage(0);
      setStartIndex(0);
      setEndIndex(12);
      setDisplayedArticles(articles);
    }
  };

  const numberOfPages = useMemo(() => {
    const pages: number[] = [];
    for (let i = 0; i < Math.ceil(displayedArticles.length / 12); i++) {
      pages.push(i);
    }
    return pages;
  }, [displayedArticles]);

  return (
    <Default>
      <div className="flex items-center flex-col">
        <h1 className="text-2xl mt-2 font-bold">FCBK&#39;s Blog</h1>
        <h2 className="text-lg mt-2 font-bold">
          By The Creators of BK&#39;s Blog
        </h2>
        <Tabs tabs={tabs} onClick={handleSelectedTab} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6">
          {displayedArticles.slice(startIndex, endIndex).map((article) => (
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
        {numberOfPages.length > 1 ? (
          <div className="py-2 px-4 flex justify-end w-full">
            <nav>
              <ul className="flex">
                <li>
                  {currentPage !== 0 ? (
                    <a
                      className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 hover:bg-black hover:text-yellow-300"
                      onClick={() => {
                        const previousPage = currentPage - 1;
                        if (previousPage >= 0) {
                          setCurrentPage(previousPage);
                          setStartIndex(startIndex - 12);
                          setEndIndex(endIndex - 12);
                        }
                      }}
                    >
                      Previous
                    </a>
                  ) : (
                    <></>
                  )}
                </li>
                {numberOfPages.map((page, index) => (
                  <li key={index}>
                    {index === currentPage ? (
                      <a className="relative block rounded-full px-3 py-1.5 text-sm transition-all duration-300 bg-black text-yellow-300">
                        {index}
                      </a>
                    ) : (
                      <a className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300">
                        {index}
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  {currentPage !== numberOfPages.length - 1 ? (
                    <a
                      className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 hover:bg-black hover:text-yellow-300"
                      onClick={() => {
                        const nextPage = currentPage + 1;
                        if (nextPage < numberOfPages.length) {
                          setCurrentPage(nextPage);
                          setStartIndex(startIndex + 12);
                          setEndIndex(endIndex + 12);
                        }
                      }}
                    >
                      Next
                    </a>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <></>
        )}
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
