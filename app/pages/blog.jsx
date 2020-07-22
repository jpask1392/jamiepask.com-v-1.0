import AppLayout from '../layouts/app';
import styled from 'styled-components';
import { archiveArticleQuery } from '../graphql/blog'
import { Grid, Container } from "@material-ui/core"
import { server } from '../config'
import ArticleCard from '../components/articleCard'
import ArticleCardLarge from '../components/articleCardLarge'
import keystonePageRequest from '../utils/fetchRequest'

const Blog = ({allPosts, className, page}) => {
  return ( 
    <AppLayout data={page}>
      <Container className={className}>
        <Grid container spacing={5}>
          {allPosts.map((post, index) => {
            if (index === 0) {
              return ( <Grid item xs={12} key={index}>
                <ArticleCardLarge data={post} type="blog" />
              </Grid>  )  
            } else {
              return ( <Grid item xs={12} sm={6} md={4} key={index}>
                <ArticleCard data={post} type="blog" />
              </Grid>  )
            }
          })}
        </Grid>
      </Container>
    </AppLayout>
  )
};

export default styled(Blog)`
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};
`;

// This function gets called at build time.
export async function getStaticProps() {
  const page = await keystonePageRequest("5ec2a8270c53c998a1ca2bfb");

  // separate query for collecting blog posts
  const res = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: archiveArticleQuery}),
  });

  const data = await res.json();
  const allPosts = data.data.allPosts

  // Component will receive `allPosts`
  // and 'page' as props at build time
  return {
    props: {
      allPosts,
      page
    },
  }
}
