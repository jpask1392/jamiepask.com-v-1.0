import styled from 'styled-components'
import AppLayout from '../../layouts/app';
import { Image } from "cloudinary-react"
import { server, assetDir } from '../../config'
import { Grid, Container } from "@material-ui/core"
import ReactMarkdown from "react-markdown"
import RelatedProjects from '../../blocks/relatedProjects'
import { 
  singleProjectQuery,
  archiveProjectQuery,
  relatedProjectQuery 
} from '../../graphql/projects'
import { mediaQueries } from '../../media_queries';

const Project = ({project, allProjects, className}) => {

  function createMarkup() {
    return {__html: project.body};
  }

  return ( 
    <AppLayout 
      data={{
        title: project.title, 
        cta_link: project.site,
        isProject: true
      }}
      title={`Work - ${project.title}`}
    >
      <div className={className}>
        <Container className="overview">
          <Grid container>
            <Grid item md={6} className="intro-text">
              <div>
                <h2>Overview</h2>
                <ReactMarkdown 
                  source={project.overview} 
                  transformImageUri={uri => `${assetDir}${uri}`}
                />
              </div>
            </Grid>  
            <Grid item xs={6}>
              {project.introImage && (
                <Image
                  cloudName='djetpo84s'
                  publicId={project.introImage.id}
                  height='100%'
                  secure={true}
                />
              )}
            </Grid>  
          </Grid>            
        </Container>

        <div className="bg-contrast">
          <Container>
            <div className="project__featured-img">
              {project.featuredImage && (
                <Image
                  cloudName='djetpo84s'
                  publicId={project.featuredImage.id}
                  width='100%'
                  secure={true}
                />
              )}
            </div>
          </Container>

          <Container maxWidth="sm">
            <div className="project__needs">
              <ReactMarkdown 
                source={project.needs}
                transformImageUri={uri => `${assetDir}${uri}`}
              />
            </div>
          </Container>
        </div>

        <Container>
          <Grid container justify="center">
            <Grid item md={8}>
            <div className="project__image-list">
              <ReactMarkdown 
                source={project.body} 
                transformImageUri={uri => `${assetDir}${uri}`}
              />
            </div>
            </Grid>
          </Grid>
        </Container>

        <div className="bg-primary">
          <Container>
            <Grid container className="project__how">
              <Grid item md={6}>
                <div className="text">
                  <ReactMarkdown 
                    source={project.howBody} 
                    transformImageUri={uri => `${assetDir}${uri}`}
                  />  
                </div>
              </Grid>
              <Grid item xs={6} className="image-wrapper">
                <div className="image">
                  {project.howImage && (
                    <Image
                      cloudName='djetpo84s'
                      publicId={project.howImage.id}
                      width='100%'
                      secure={true}
                    />
                  )}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Container>
          <Grid container className="project__more" spacing={4}>
            <Grid item xs={12} className="title">
              <h2>More Projects</h2>
            </Grid>
            <RelatedProjects 
              data={allProjects} 
              currentProject={project.id}
            />
          </Grid>
        </Container>

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
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: archiveProjectQuery}),
  });
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.allProjects.map(project => `/projects/${project.slug}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time.
export async function getStaticProps({ params }) {

  // get current project data from slug
  const singleProjectRes = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: singleProjectQuery(params.slug)}),
  });

  const singleProjectData = await singleProjectRes.json();
  const project = singleProjectData.data.allProjects[0];

  // get all project data for related project section
  const allProjectRes = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: relatedProjectQuery}),
  });

  const allProjectData = await allProjectRes.json();
  const allProjects = allProjectData.data.allProjects;

  return {
    props: {
      project,
      allProjects
    },
  }
}
