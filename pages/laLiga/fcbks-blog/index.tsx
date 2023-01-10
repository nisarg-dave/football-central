import { GetStaticProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Default from "../../../layouts/Default";
import { articles } from "../../../typings";

interface fCBkHomeProps {
  articles: articles[];
}

function index({ articles }: fCBkHomeProps) {
  const [allPostsTab, setAllPostsTab] = useState(false);
  const [featuredArticlesTab, setFeatureArticlesTab] = useState(false);
  const [opinionTab, setOpinionTab] = useState(false);
  const [quickUpdatesTab, setQuickUpdatesTab] = useState(false);
  const [postMatchReviewsTab, setPostMatchReviewsTab] = useState(false);
  const truncate = (string: articles, n: number) => {
    string = string.body[0].children[0].text;
    // String might not be there hence ?
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <Default>
      <div className="flex items-center flex-col bg-yellow-200">
        <h1 className="text-2xl mt-2 font-bold">FCBK&#39;s Blog</h1>
        <h2 className="text-xl mt-2 font-bold">
          By The Creators of BK&#39;s Blog
        </h2>
        <div className="text-base font-medium text-center text-slate-500 mt-4">
          <ul className="flex">
            <li className="mr-2">
              <p
                className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-200 hover:bg-black hover:border-black"
                onClick={() => {
                  setAllPostsTab(!allPostsTab);
                }}
              >
                All Posts
              </p>
            </li>
            <li className="mr-2">
              <p
                className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-200 hover:bg-black hover:border-black"
                onClick={() => {
                  setFeatureArticlesTab(!featuredArticlesTab);
                }}
              >
                Featured Articles
              </p>
            </li>
            <li className="mr-2">
              <p
                className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-200 hover:bg-black hover:border-black"
                onClick={() => {
                  setOpinionTab(!opinionTab);
                }}
              >
                Opinion
              </p>
            </li>
            <li className="mr-2">
              <p
                className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-200 hover:bg-black hover:border-black"
                onClick={() => {
                  setQuickUpdatesTab(!quickUpdatesTab);
                }}
              >
                Quick Updates
              </p>
            </li>
            <li className="mr-2">
              <p
                className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-200 hover:bg-black hover:border-black"
                onClick={() => {
                  setPostMatchReviewsTab(!postMatchReviewsTab);
                }}
              >
                Post-Match Reviews
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 scrollbar-hide overflow-y-scroll">
          {articles.map((article) => (
            <Link key={article._id} href={`/laLiga/fcbks-blog/${article.slug}`}>
              <div className="border border-transparent rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105"
                  src={article.mainImage}
                  alt=""
                ></img>
                <div className="flex flex-col justify-between p-5">
                  <p className="text-lg font-bold">{article.title}</p>
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

export const getStaticProps: GetStaticProps = async () => {
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
