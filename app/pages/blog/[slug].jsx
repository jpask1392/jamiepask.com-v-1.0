import AppLayout from '../../layouts/app';
import { Image } from "cloudinary-react"
import { server } from '../../config'
import { singleArticleQuery, archiveArticleQuery } from '../../graphql/blog'
import { Grid, Container } from "@material-ui/core"
import ReactMarkdown from "react-markdown"
import styled from 'styled-components'

const Post = ({post, className}) => {
  const data = {
    title: post.title
  }
  return ( 
    <AppLayout data={data} title={`Blog - ${data.title} - `}>
      <Container className={className}>

        <Container maxWidth='md'>
          <div class="post-intro"><ReactMarkdown source={post.intro}/></div>
        </Container>

        {post.featuredImage && (
          <Image
            cloudName='djetpo84s'
            publicId={post.featuredImage.id}
            width='100%'
            className="featured"
            secure={true}
          />
        )}

        <Grid container justify="center">
          <Grid item md={7}>
            <div class="content" dangerouslySetInnerHTML={{__html: post.body}}></div>
          </Grid>
        </Grid>
        
      </Container>
    </AppLayout>
  )
}

export default styled(Post)`
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};

  & code {
    background-color: #eee;
    border: 1px solid #999;
    display: block;
    padding: 20px;
    white-space: break-spaces;
  }

  & blockquote {
    font-style: italic;
    margin-top: ${props => props.theme.spacing[4]};
    margin-bottom: ${props => props.theme.spacing[4]};
    color: rgb(76 76 76);
  }

  & img.featured {
    margin-top: ${props => props.theme.spacing[5]};
    margin-bottom: ${props => props.theme.spacing[5]};
  }

  & .content {
    font-size: ${props => props.theme.fontSizes[4]};

    p:first-of-type {
      margin-top: 0;
    }

    img {
      margin-top: ${props => props.theme.spacing[3]};
      margin-bottom: ${props => props.theme.spacing[3]};
    }
  }
`;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: archiveArticleQuery}),
  });
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.allPosts.map(post => `/blog/${post.slug}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time.
export async function getStaticProps({ params }) {

  const res = await fetch(`${server}/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: singleArticleQuery(params.slug)}),
  });

  const data = await res.json();
  const post = data.data.allPosts[0];

  // Component will receive `blocks` as a prop at build time
  return {
    props: {
      post,
    },
  }
}
