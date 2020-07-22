import AppLayout from '../layouts/app'
import AboutIntro from '../blocks/aboutIntro'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import keystonePageRequest from '../utils/fetchRequest'
import { Grid, Container } from "@material-ui/core"

function AboutPage({page, className}) {
  // Map block name<string> to components<object>
  // Import dynamically when rendered to page
  const components = {
    "featured_project_layout": dynamic(() => import('../blocks/featuredProjects')),
    "two_column_layout": dynamic(() => import('../blocks/twoColumn'))
  }
  
  return (
    <>
    <AppLayout data={page}>
      <div className={className}>
        <div style={{ maxWidth: 1360, margin: "auto" }}>
          <Grid container justify="center" spacing={5} className="image-grid">
            <Grid item xs={12} md={4}>
              <img style={{marginTop: 25}} src="./about__1.jpg" alt=""/>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{marginTop: 100}} src="./about__2.jpg" alt=""/>
            </Grid>
            <Grid item xs={12} md={2}>
              <img src="./about__3.jpg" alt=""/>
            </Grid>
          </Grid>
        </div>
        {page.blocks.map((block, i) => {
          // Render block based on block name
          let key = Object.keys(block)[0];
          let DynamicTagName = components[key];
          return <DynamicTagName key={key} data={block[key]}/>
        })}
      </div>
    </AppLayout>
    </>
  );
}

export default styled(AboutPage)`
  padding-top: ${props => props.theme.spacing[5]};

  & .image-grid {
    img {
      border-radius: 20px;
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

// This function gets called at build time on server-side.
// use function to collect data and populate component
export async function getStaticProps() {
  // pass page ID to keystone page request
  const page = await keystonePageRequest("5eb2c5d022b5236e54c2df5c");
  // Component will receive `blocks` as a prop at build time
  return {
    props: {
      page,
    },
  }
}

