export const archiveProjectQuery = `
  query {
    allProjects {
      id
      title
      slug
      body
      thumbnailImage { id }
      tags { name }
      excerpt
    }
  }
`;

export const singleProjectQuery = projectId => (`
  query {
    allProjects (where: { slug: "${projectId}"} ) {
      id
      title
      site
      overview
      introImage { id }
      featuredImage { id }
      needs
      body
      howBody
      howImage { id }
    }
  }
`);

export const relatedProjectQuery = `
  query {
    allProjects {
      id
      title
      slug
      overview
      body
      thumbnailImage { id }
      tags { name }
      excerpt
    }
  }
`;
