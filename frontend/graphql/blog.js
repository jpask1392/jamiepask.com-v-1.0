export const archiveArticleQuery = `
  query {
    allPosts {
      featuredImage {
        id
      }
      excerpt
      title
      intro
      slug
      categories { name }
    }
  }
`;

export const singleArticleQuery = articleId => (`
  query {
    allPosts (where: { slug: "${articleId}"} ) {
      id
      title
      intro
      featuredImage {
        id
      }
      body
    }
  }
`
);
