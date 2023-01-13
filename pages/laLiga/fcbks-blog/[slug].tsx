import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Default from "../../../layouts/Default";
import { sanityClient } from "../../../sanity";
import { articles } from "../../../typings";
import PortableText from "react-portable-text";

interface postProps {
  article: articles;
}

function Article({ article }: postProps) {
  return (
    <Default>
      <div className="flex flex-col bg-yellow-200 h-full">
        <article className="max-w-3xl mx-auto p-5 h-[50rem] scrollbar-hide overflow-y-scroll">
          <h1 className="text-3xl mt-10 mb-3">{article.title}</h1>
          <p className="font-extralight text-sm">
            Article by {article.authorName}
          </p>
          <p className="font-extralight text-sm">
            {new Date(article.publishedAt).toDateString()}
          </p>
          <div className="mt-3 py-1">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={article.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
              }}
            />
          </div>
        </article>
      </div>
    </Default>
  );
}

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesResponse = await fetch(
    `${process.env.BASE_URL}/api/articles/getArticles`
  );
  const articles = await articlesResponse.json();
  const paths = articles.map((article: articles) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// Destructure context to get params which is from above
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Can then replace $slug in query with params.slug
  const slugResponse = await fetch(
    `${process.env.BASE_URL}/api/articles/getSlugs?slug=${params?.slug}`
  );
  const article = await slugResponse.json();

  return {
    props: {
      article,
    },
  };
};
