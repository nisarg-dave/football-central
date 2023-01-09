import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Default from "../../../layouts/Default";
import { sanityClient } from "../../../sanity";
import { articles } from "../../../typings";

interface postProps {
  article: articles;
}

function Post({ article }: postProps) {
  return (
    <Default>
      <div></div>
    </Default>
  );
}

export default Post;

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
