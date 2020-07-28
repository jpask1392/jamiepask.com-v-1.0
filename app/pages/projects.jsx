import AppLayout from '../layouts/app';
import styled, { keyframes } from 'styled-components';
import { Grid, Container } from "@material-ui/core"
import { server } from '../config'
import { archiveProjectQuery } from '../graphql/projects'
import { tagsQuery, filterTagsQuery } from '../graphql/tags'
import keystonePageRequest from '../utils/fetchRequest'
import Link from 'next/link';
import ProjectCard from "../components/projectsCard"
import { Parallax } from 'react-scroll-parallax';
import { CSSTransition } from 'react-transition-group'
import { ParallaxProvider } from 'react-scroll-parallax';
import { mediaQueries } from '../media_queries';

const Projects = ({allProjects, className, page, allTags}) => {
  const didMountRef = React.useRef(false); // used to stop intial useEffect
  const [projects, setProjects] = React.useState(allProjects);
  const [currentFilter, setFilter] = React.useState('all');
  const [showProject, setShowProject] = React.useState(false);

  const handleClick = () => {
    // scroll to top of div
    // update the state 
  }

  const timeout = 600;
  
  React.useEffect(() => {
    if (didMountRef.current) {

      setShowProject(false)

      if (currentFilter === 'all') {
        (async () => {
          const res = await fetch(`${ server }/admin/api`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({query: archiveProjectQuery}),
          });
          const results = await res.json();
          
          setTimeout(() => {
            setProjects(results.data.allProjects);
            setShowProject(true)
          }, timeout)
          
        })()
      } else {
        (async () => {
          const res = await fetch(`${ server }/admin/api`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({query: filterTagsQuery(currentFilter)}),
          });
          const results = await res.json();

          setTimeout(() => {
            
            setProjects(results.data.Tag.projects);
            setShowProject(true)
          }, timeout)
        })()
      }

    } else {
      didMountRef.current = true;
    }
  }, [currentFilter])

  return ( 
    <ParallaxProvider>
    <AppLayout data={page}>
      <div className={className}>
      <Container maxWidth='md'>
        <Grid container className="header">
          <Grid item md={7}>
            <h2>Work</h2>
            <h3>Working as a freelance contractor for // Techyscouts in Los Angeles, here are some recently completed projects. </h3>
            <Link href='/about'><a className="link">Get to know me</a></Link>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container className="projects">

          <Grid item xs>
            <ul className="filters-list">
              <li className={(currentFilter === 'all') ? 'active' : undefined}>
                <a onClick={() => setFilter('all')}>
                  All Projects
                </a>
              </li>
              {allTags.map((tag) => (
                <li key={tag.id} className={(currentFilter === tag.id) ? 'active' : undefined}>
                  <a onClick={() => setFilter(tag.id)}>
                    {tag.name}
                  </a>
                </li> 
              ))}
            </ul>
          </Grid>

          <Grid item md={9}>
            <Grid container spacing={5}>
              <Grid item md={6}>

                  {projects.map((project, i) => (
                    (i % 2 === 0) && (
                      <CSSTransition key={i} in={showProject} timeout={timeout} classNames="example">
                        <ProjectCard project={project} />                   
                      </CSSTransition>     
                    )
                  ))}

              </Grid>
              <Grid item md={6} style={{marginTop: 75}}>

                  {projects.map((project, i) => (
                    (i % 2 !== 0) && (
                      <CSSTransition 
                        key={i}
                        in={showProject} 
                        timeout={timeout} 
                        classNames="example" 
                        appear={true}>
                        <ProjectCard project={project} />                   
                      </CSSTransition>     
                    )
                  ))}
      
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </div>
    </AppLayout> 
    </ParallaxProvider>
  )
};


export default styled(Projects)`
  padding: ${props => props.theme.spacing[5]} 0;
  position: relative;

  & .example-enter {
    opacity: 0;
  }
  
  & .example-enter.example-enter-active {
    opacity: 1;
    transition: all 1000ms ease-in;
  }
  
  & .example-exit {
    opacity: 1;
  }
  
  & .example-exit.example-exit-active {
    opacity: 0;
    transform: translateX(50px);
    transition: all 600ms ease-in;
  }

  & .header {
    position: relative;
    padding-bottom: ${props => props.theme.spacing[4]};

    a {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  & .parallax-child-container {
    margin-top: 7rem;
  }

  & .filters-list {
    position: sticky;
    top: 100px;
    list-style-type: none;
    padding: 0;

    .active {
      font-weight: ${props => props.theme.fontWeights.bold};
    }

    li {
      font-size: ${props => props.theme.fontSizes[4]};
      cursor: pointer;
    }
  }

  & .projects {
    @media ${mediaQueries.md_up} {
      padding: ${props => props.theme.spacing[5]} 0;
    }

    .project-card {
      margin-bottom: ${props => props.theme.spacing[5]};

      &__image {
        border-radius: 20px;
        box-shadow: ${props => props.theme.boxShadow};
        overflow: hidden;
        line-height: 0;

        img {
          height: 100%
        }
      }
    }
  }
`;

// This function gets called at build time.
export async function getStaticProps() {
  /**
   * Get Page Data
   */
  const page = await keystonePageRequest("5ec2a78330a5c89450f9b9a6");

  /**
   * Get Project Data
   */
  const projectResponse = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: archiveProjectQuery}),
  });

  /**
   * Get Tag data for filter field
   */
  const tagsResponse = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: tagsQuery}),
  });

  const projectData = await projectResponse.json();
  const tagData = await tagsResponse.json();
  const allProjects = projectData.data.allProjects
  const allTags = tagData.data.allTags

  // Component will receive `blocks` as a prop at build time
  return {
    props: {
      allProjects,
      page,
      allTags
    },
  }
}
