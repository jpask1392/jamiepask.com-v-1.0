export const tagsQuery = `
query {
  allTags {
    id
    name
    projects {
      id
      title
      slug
      body
      featuredImage { id }
      tags { name }
      excerpt
    }
  }
}
`
;

export const filterTagsQuery = filterID => `
query {
  Tag (where: { id: "${filterID}" }) {
    name
    id
    projects {
      id
      title
      slug
      body
      thumbnailImage { id }
      tags { name }
      excerpt
    }
  }
}
`
;