import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Default from "../../../layouts/Default";
import { articles } from "../../../typings";
import PortableText from "react-portable-text";
import WidgetStatCard from "../../../components/widgets/WidgetStatCard";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { useRouter } from "next/router";
import Head from "next/head";

interface postProps {
  article: articles;
}

function Article({ article }: postProps) {
  const router = useRouter();
  const truncate = (text: string, n: number) => {
    // String might not be there hence ?
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  if (router.isFallback) {
    return (
      <Default>
        <h1>Loading...</h1>
      </Default>
    );
  }
  return (
    <Default>
      <Head>
        <meta
          property="og:url"
          content={`https://football-central.vercel.app/laLiga/fcbks-blog/${article.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={truncate(article.body[0].children[0].text, 150)}
        />
        <meta property="og:image" content={article.mainImage} />
        <meta property="og:image:width" content="644" />
        <meta property="og:image:height" content="362" />
        <meta
          property="og:site_name"
          content="Football Central - FCBK's Blog"
        />
      </Head>
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
