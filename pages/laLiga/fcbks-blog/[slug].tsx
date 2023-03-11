import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Default from "../../../layouts/Default";
import { articles } from "../../../typings";
import PortableText from "react-portable-text";
import WidgetStatCard from "../../../components/widgets/WidgetStatCard";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { useRouter } from "next/router";

interface postProps {
  article: articles;
}

function Article({ article }: postProps) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Default>
        <h1>Loading...</h1>
      </Default>
    );
  }
  return (
    <Default>
      <div className="flex flex-col h-full">
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
                link: (props: any) => (
                  <a className="underline text-blue-400" {...props} />
                ),
              }}
            />
          </div>
          {article.barcaFixture ? (
            <WidgetStatCard fixtureId={article.barcaFixture} />
          ) : (
            <></>
          )}
        </article>
      </div>
    </Default>
  );
}

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesQuery = groq`*[_type=="article"]{
  _id,
  title,
  "authorName": author->name,
  mainImage,
  slug,
  "categoryName": category[0]->categoryName,
  publishedAt,
  body,
  "barcaFixture": barcaFixture[0]->fixture
} | order(publishedAt desc)`;

  const articles = await sanityClient.fetch(articlesQuery);
  const paths = articles.map((article: articles) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

// Destructure context to get params which is from above
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Can then replace $slug in query with params.slug

  const slugQuery = groq`*[_type=="article" && slug == $slug][0]{
  _id,
  title,
  "authorName": author->name,
  mainImage,
  slug,
  "categoryName": category[0]->categoryName,
  publishedAt,
  body,
  "barcaFixture": barcaFixture[0]->fixture
  } `;

  const article = await sanityClient.fetch(slugQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      article,
    },
  };
};
