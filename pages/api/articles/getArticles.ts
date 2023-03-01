// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<articles[]>
) {
  const articlesRes = await sanityClient.fetch(articlesQuery);
  res.status(200).json(articlesRes);
}
