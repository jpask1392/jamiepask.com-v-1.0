import AppLayout from '../layouts/app'
import AboutIntro from '../blocks/aboutIntro'
import dynamic from 'next/dynamic'
import keystonePageRequest from '../utils/fetchRequest'
import { archiveArticleQuery } from '../graphql/blog'
import { server } from '../config'
import FeaturedProjects from '../blocks/featuredProjects'
import TwoColumn from '../blocks/twoColumn'

function HomePage({page, allPosts}) {
  // Map block name<string> to components<object>
  // Import dynamically when rendered to page
  const components = {
    "featured_project_layout": FeaturedProjects,
    "two_column_layout": TwoColumn
  }

  console.log("bundled")
  
  return (
    <>
    <AppLayout data={page}>
      {page.blocks.map((block, i) => {
        // Render block based on block name
        let key = Object.keys(block)[0];
        let DynamicTagName = components[key];

        // temp fix for adding extra 
        // content section
        if (i === 1) {
          return (
            <div key={i}>
            <AboutIntro />
            <DynamicTagName data={block[key]}/>
            </div>
          )
        }
        return <DynamicTagName key={i} data={block[key]}/>
      })}
    </AppLayout>
    </>
  );
}

// This function gets called at build time.
export async function getStaticProps() {
  // pass page ID to keystone page request
  const page = await keystonePageRequest("5eb2bfe4f223ac6afdaa5e27");
  // Component will receive `blocks` as a prop at build time

  // separate query for collecting blog posts
  const res = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: archiveArticleQuery}),
  });

  const data = await res.json();
  const allPosts = data.data.allPosts

  return {
    props: {
      page,
      allPosts
    },
  }
}

export default HomePage
