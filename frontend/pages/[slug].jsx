// import styled from 'styled-components'
import AppLayout from '../layouts/app'
import getGlobalData from '../utils/getGlobalData';
import ComponentPagesHero from '../components/pageHeader';
import ComponentPagesTextOverImage from '../blocks/textOverImage/index.jsx';
import ComponentPagesIntroBlock from '../blocks/introBlock/index.jsx';
import ComponentPagesContact from '../blocks/contact/index.jsx';

const Page = ({page, globalData}) => {

  // map components to strings
  const components = {
    ComponentPagesHero,
    ComponentPagesTextOverImage,
    ComponentPagesIntroBlock,
    ComponentPagesContact,
  }

  return ( 
    <AppLayout globalData={globalData}>
      <div>
        {page.layout.map((block, i) => {
          // Render block based on typename
          let key = block.__typename;
          let DynamicTagName = components[key];
          if (DynamicTagName) return <DynamicTagName key={block.id} data={block}/>
        })}
      </div>
    </AppLayout>
  )
}

export default Page;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: `{ pages { id slug } }`}),
  });

  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.pages.map(post => `/${post.slug}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time.
export async function getStaticProps({ params }) {
  // get the data for the page here
  const data = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: `
      { 
        pages(where: {slug: "${params.slug}"}) 
        { 
          id
          title
          slug
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

            ... on ComponentPagesTextOverImage {
              __typename
              header
              text
              image {
                url
                width
                height
              }
            }
            
            ... on ComponentPagesIntroBlock {
              __typename
              id
              header
              text
            }

            ... on ComponentPagesContact {
              __typename
            }
          }
        } 
      }`
    }),
  });

  const res = await data.json();
  const page = res.data.pages[0];
  const globalData = await getGlobalData();

  return {
    props: { page, globalData },
  }
}
