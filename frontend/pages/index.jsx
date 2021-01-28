// import styled from 'styled-components'
import AppLayout from '../layouts/app'
import ComponentPagesHero from '../components/home/indexHero/indexHero.jsx';
import ComponentIndexPageIndexServices from '../components/home/indexServices/index.jsx';
import ComponentPagesRichText from '../components/common/richText/index.jsx';
import getGlobalData from '../utils/getGlobalData';


const Page = ({page, className, globalData}) => {

  // map components to objects for retrieval
  const components = {
    ComponentPagesHero,
    ComponentIndexPageIntro,
    ComponentIndexPageFeaturedProjects,
    ComponentIndexPageIndexServices,
    ComponentPagesRichText,
  };

  return ( 
    <AppLayout globalData={globalData}>
      <div>
        {page.layout.map((block, i) => {
          // Render block based on typename
          let key = block.__typename;
          let DynamicTagName = components[key] ?? null;
          if (DynamicTagName) return <DynamicTagName key={block.id} data={block}/>
        })}
      </div>
    </AppLayout>
  )
}

export default Page;

// This function gets called at build time.
export async function getStaticProps() {
  // get the data for the page here
  const data = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: `
      { 
        indexPage {
          __typename
          id
          layout {
            ... on ComponentPagesRichText {
              __typename
              id
              header
              body
              link_text
              link_url
              background_color
            }

            ... on ComponentPagesHero {
              __typename
              id
              header
              subtext
              link_text
              link_url
              is_full_height
              image {
                url
                width
                height
              }
            }

            ... on ComponentIndexPageFeaturedProjects {
              __typename
              header
              id
              body
              link_text
              link_url
              projects {
                id
                name
                featured_project_image {
                  url
                  formats
                  caption
                  width
                  height
                }
              }
            }

            ... on ComponentIndexPageIndexServices {
              __typename
              id
              service {
                id
                name
                content
              }
            }
          }
        }
      }`
    }),
  });

  const res = await data.json();
  const page = res.data.indexPage;

  const globalData = await getGlobalData();

  return {
    props: { page, globalData },
  }
}
