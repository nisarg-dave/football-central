export default {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "barcaFixture",
      title: "Barca Fixture",
      type: "array",
      of: [{ type: "reference", to: { type: "barcaFixture" } }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
