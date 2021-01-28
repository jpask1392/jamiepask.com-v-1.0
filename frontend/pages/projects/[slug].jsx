import styled from 'styled-components'
import AppLayout from '../../layouts/app';
import { server, assetDir } from '../../config'
import { Grid, Container } from "@material-ui/core"
import RelatedProjects from '../../blocks/relatedProjects'
import { 
  singleProjectQuery,
  archiveProjectQuery,
  relatedProjectQuery 
} from '../../graphql/projects'
import { mediaQueries } from '../../media_queries';
import getGlobalData from '../../utils/getGlobalData';
import ComponentPagesHero from '../../components/pageHeader';
import ComponentIndexPageIntro from '../../blocks/indexAbout/index.jsx';
import ComponentPagesRichText from '../../components/common/richText/index.jsx';
import ComponentPagesFullWidthImage from '../../blocks/fullWidthImage/index.jsx';

const Project = ({project, allProjects, className, globalData}) => {

  // map components to strings
  const components = {
    ComponentPagesHero,
    ComponentIndexPageIntro,
    ComponentPagesRichText,
    ComponentPagesFullWidthImage,
  }

  return ( 
    <AppLayout globalData={globalData}>
      <div className={className}>
        <div>
          {project.layout.map((block, i) => {
            // Render block based on typename
            let key = block.__typename;
            let DynamicTagName = components[key];
            if (DynamicTagName) return <DynamicTagName key={block.id} data={block}/>
          })}
        </div>
      </div>
    </AppLayout>
  )
}

const borderWidth = 15;
export default styled(Project)`
  & h2 {
    margin-bottom: ${props => props.theme.spacing[3]};
  }

  & .overview {
    padding-top: ${props => props.theme.spacing[5]};

    .intro-text {
      display: flex;
      align-items: center;
      padding-top: ${props => props.theme.spacing[3]};
      padding-bottom: ${props => props.theme.spacing[3]};

      @media ${mediaQueries.md_up} {
        padding-right: ${props => props.theme.spacing[5]};
        padding-top: ${props => props.theme.spacing[5]};
        padding-bottom: ${props => props.theme.spacing[5]};
      }
    }

    img {
      display: none;

      @media ${mediaQueries.lg_up} {
        display: block;
      }
    }
  }

  & .bg-contrast {
    background: #FAFAFA;
    padding-top: ${props => props.theme.spacing[5]};
    padding-bottom: 10rem;
    position: relative;
    z-index: -10;
  }

  & .project {
    &__featured-img {
      position: relative;
      border: ${borderWidth}px solid black;
      border-radius: 20px;
      line-height: 0;
      font-size: 0;
      box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);

      &::after {
        content: "";
        position: absolute;
        width: calc(100% + ${2*borderWidth}px);
        height: calc(100% + ${2*borderWidth}px);
        left: -${borderWidth}px;
        top: -${borderWidth}px;
        border: 3px solid grey;
        box-sizing: border-box;
        border-radius: 20px;
      }

      img {
        position: relative;
        z-index: -1;
      }
    }

    &__needs {
      text-align: center;
      padding-top: ${props => props.theme.spacing[5]};
      padding-bottom: ${props => props.theme.spacing[5]};
    }

    &__image-list {
      margin-top: -10rem;
      padding-bottom: ${props => props.theme.spacing[5]};

      > p {
        margin-top: 0;
      }

      img {
        box-shadow: ${props => props.theme.boxShadow};
      }
    }

    &__how {
      padding-top: ${props => props.theme.spacing[5]};
      padding-bottom: ${props => props.theme.spacing[5]};

      .text {
        @media ${mediaQueries.md_up} {
          padding-right: ${props => props.theme.spacing[5]};
        }
      }

      .image-wrapper {
        display: block;
        margin: auto;
        padding-top: ${props => props.theme.spacing[4]};

        @media ${mediaQueries.md_up} {
          margin: 0;
          padding-top: 0;
        }
      }

      .image {
        max-width: 350px;
        margin: auto;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }

    &__more {
      padding-top: ${props => props.theme.spacing[5]};
      padding-bottom: ${props => props.theme.spacing[5]};

      .title {
        text-align: center;
      }
    }
  }

  & .meta {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 80px 0;

    &__title {
      margin-bottom: 0;
    }
  }

  & .bg-primary {
    background-color: ${props => props.theme.bg.primary}
  }
`;

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
      {
        projects {
          __typename
          id
          name
          site_link
          slug
          tags {
            name
          }
          card_project_image {
            id
            formats
            url
            width
            height
          }
        }
      }
      `
    }),
  });

  const projectsRes = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = projectsRes.data.projects.map(project => `/projects/${project.slug}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time.
export async function getStaticProps({ params }) {

  const res = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
      {
        projects(where: { slug: "${params.slug}" }) {
          __typename
          id
          name
          site_link
          slug
          tags {
            name
          }
          card_project_image {
            id
            formats
            url
            width
            height
          }
          layout {
            ... on ComponentPagesHero {
              __typename
              id
              header
              subtext
              link_text
              link_url
              is_full_height
            }

            ... on ComponentIndexPageIntro {
              __typename
              header
              body
              link_text
              link_url
              image {
                url
                formats
                caption
                width
                height
              }
            }

            ... on ComponentPagesRichText {
              __typename
              id
              header
              body
              link_text
              link_url
              background_color
            }

            ... on ComponentPagesFullWidthImage {
              __typename
              image {
                url
                formats
                caption
                width
                height
              }
            }
          }
        }
      }
      `
    }),
  });

  const projectRes = await res.json();
  const project = projectRes.data.projects[0];
  const globalData = await getGlobalData();

  return {
    props: {
      project,
      globalData
    },
  }
}
