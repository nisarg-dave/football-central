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
  const convertPublishedDate = (t: string) => new Date(t).toDateString();
  return (
    <Default>
      <div className="flex flex-col bg-yellow-200 h-full">
        <article className="max-w-3xl mx-auto p-5 h-[50rem] scrollbar-hide overflow-y-scroll">
          <h1 className="text-3xl mt-10 mb-3">{article.title}</h1>
          <p className="font-extralight text-sm">
            Article by {article.authorName}
          </p>
          <p className="font-extralight text-sm">
            {convertPublishedDate(article.publishedAt)}
          </p>
          <div className="mt-3">
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
    fallback: "blocking",
  };
};

// Destructure context to get params which is from above
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="article" && slug == $slug][0]{
  _id,
  title,
  "authorName": author->name,
  mainImage,
  slug,
  "categoryName": category[0]->categoryName,
  publishedAt,
  body
} `;

  // Can then replace $slug in query with params.slug
  const article: articles = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  // If not found telling nextjs to use 404 page
  if (!article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article,
    },
  };
};
