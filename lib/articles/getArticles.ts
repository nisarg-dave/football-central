import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

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

export default async function getArticles() {
  const articlesRes = await sanityClient.fetch(articlesQuery);
  return articlesRes;
}
