// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const slugQuery = groq`*[_type=="article" && slug == $slug][0]{
  _id,
  title,
  "authorName": author->name,
  mainImage,
  slug,
  "categoryName": category[0]->categoryName,
  publishedAt,
  body
} `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<articles>
) {
  // Can then replace $slug in query with params.slug
  const query = req.query;
  const { slug: slugParam } = query;
  const slugRes = await sanityClient.fetch(slugQuery, {
    slug: slugParam,
  });
  res.status(200).json(slugRes);
}
