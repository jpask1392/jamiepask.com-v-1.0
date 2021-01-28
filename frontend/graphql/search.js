export const search = searchTerm => `
  query {
    allPosts(where: {
      OR: [
        { title_contains_i: "${searchTerm}" },
        { excerpt_contains_i: "${searchTerm}" },
        { intro_contains_i: "${searchTerm}" },
      ]
    }) {
      id
      intro
      excerpt
      title
      slug
    }

    allProjects(where: {
      OR: [
         { title_contains_i: "${searchTerm}" },
         { body_contains_i: "${searchTerm}" }
      ]
    }) {
      id
      title
      slug
    }
  }
`