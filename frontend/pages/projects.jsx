import AppLayout from '../layouts/app';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, CircularProgress } from "@material-ui/core";
import { server } from '../config'
import { archiveProjectQuery } from '../graphql/projects'
import { tagsQuery, filterTagsQuery } from '../graphql/tags'
import Link from 'next/link';
import ProjectCard from "../components/projectsCard"
import { CSSTransition } from 'react-transition-group'
import { mediaQueries } from '../media_queries';
import getGlobalData from '../utils/getGlobalData';
import PageHeader from '../components/pageHeader';
import Brands from '../blocks/brands/index.jsx';
import { H1, H2, H3, P, WavyUnderline } from '../components/typography';
import HeaderSplitter from "../components/headerSplitter";;

const Projects = ({allProjects, className, page, globalData}) => {
  const [projects, setProjects] = React.useState(allProjects);
  const [isLoading, setIsLoading] = React.useState(false);
  const [allLoaded, setallLoaded] = React.useState(false);

  // map components to strings
  const components = {
    "ComponentPagesHero": PageHeader,
    "ComponentWorkPageBrandsGallery": Brands,
  }

  const fetchMorerojects = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const alreadyLoadedIds = projects.map(project => project.id);
    const res = await fetch(`http://localhost:1337/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `
        {
          projects(limit: 4, where: { id_nin: [${ alreadyLoadedIds.map(id => "\"" + id + "\"") }] }) {
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
            }
          }
        }
        `
      }),
    });
    
    const data = await res.json();
    const addProjects = data.data.projects;

    setProjects([...projects, ...addProjects]);
    setIsLoading(false);
  }

  const checkAllLoaded = async () => {
    const getCount = await fetch(`http://localhost:1337/projects/count`)
    const count = await getCount.json();

    if (projects.length === count) { 
      setallLoaded(true);
    }
  }

  /**
   * Check if all projects are loaded
   */
  React.useEffect(() => {
    checkAllLoaded()
  }, [projects]);

  return ( 
  <AppLayout globalData={globalData}>
      <div class="pre-content-blocks">
        {page.work_content.map((block, i) => {
          // Render block based on typename
          let key = block.__typename;
          let DynamicTagName = components[key];
          if (DynamicTagName) return <DynamicTagName key={block.id} data={block}/>
        })}
      </div>

      <div className={className}>
        <div className="projects-wrapper">
          <Container>
            <Grid container spacing={10}>
              {projects.map((project, i) => (
                <Grid item xs md={6} key={project.id}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Container>
          
          { !allLoaded && (
              <div className="loadmore">
                <WavyUnderline>
                  <a href="#" onClick={fetchMorerojects}>
                    <H3>Load More?</H3>
                  </a>
                </WavyUnderline>
                { 
                  isLoading && 
                    <span className="loading">
                      <CircularProgress size={20} />
                    </span> 
                }
              </div>
          )}
        </div>

      </div>
    </AppLayout>
  )
};


export default styled(Projects)`
  position: relative;

  .header-splitter {
    background-color: white;
  }

  + footer .header-splitter,
  + footer .instagram {
    background-color: ${props => props.theme.color.primary};;
  }

  & .header {
    position: relative;

    a {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .loadmore {
    text-align: center;
    padding-top: ${props => props.theme.spacing[3]};
  }

  .projects-wrapper {
    padding: ${props => props.theme.spacing[3]} 0;

    .loading {
      margin-left: 20px;
    }

    .MuiGrid-root.MuiGrid-item:nth-child(4n+4) .project-card,
    .MuiGrid-root.MuiGrid-item:nth-child(1) .project-card,
    .MuiGrid-root.MuiGrid-item:nth-child(5n+5) .project-card {
      .project-card__image {
        padding-bottom: 85%;
      }
    }

    .MuiGrid-root.MuiGrid-item:nth-child(4n+3) .project-card {
        margin-top: -25%;
    }
  }
`;

// This function gets called at build time.
export async function getStaticProps() {
  // get the data for the page here
  const data = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: `
    { 
      workPage {
        __typename
        id
        work_content {
          ... on ComponentPagesHero {
            __typename
            id
            header
            subtext
            link_text
            link_url
            is_full_height
          }
          
           ... on ComponentWorkPageBrandsGallery {
            __typename
            id
            header
            gallery {
              id
              formats
            }
          }
        }
      }
    }`
    }),
  });

  // Call an external API endpoint to get posts
  const projectsData = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
      {
        projects(limit: 4) {
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

  const res = await data.json();
  const projectsRes = await projectsData.json();
  const page = res.data.workPage;
  const allProjects = projectsRes.data.projects;
  const globalData = await getGlobalData();

  return {
    props: { page, globalData, allProjects },
  }
}
