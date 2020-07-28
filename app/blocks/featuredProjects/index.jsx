import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import { Image } from "cloudinary-react"

const FeaturedProjects = ({className, data}) => {
  return (
    <section className={className}>
      <Container>
        <Container maxWidth="sm">
          <div className="introduction">
            <h2>{data.title}</h2>
            <h3><ReactMarkdown source={data.intro} /></h3>
          </div>
        </Container>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="project-item">
            {data.projectOne.thumbnailImage && (
              <Image
                cloudName='djetpo84s'
                publicId={data.projectOne.thumbnailImage.id}
                width='100%'
              />
            )}
            <Link href={`projects/${data.projectOne.slug}`}>
              <a><PrimaryButton color="white" btnText={data.projectOne.title}/></a>
            </Link>
          </div>
        </Grid>
        <Grid item xs>
        <div className="project-item">
            {data.projectTwo.thumbnailImage && (
              <Image
                cloudName='djetpo84s'
                publicId={data.projectTwo.thumbnailImage.id}
                width='100%'
              />
            )}
            <Link href={`projects/${data.projectTwo.slug}`}>
              <a><PrimaryButton color="white" btnText={data.projectTwo.title}/></a>
            </Link>
          </div>
        </Grid>
      </Grid>
      </Container>
    </section>
  )
};

export default styled(FeaturedProjects)`
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};

  & .introduction {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing[5]};

    a {
      font-weight: ${props => props.theme.fontWeights.bold};
      color: black;
    }
  }

  & .project-item {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    overflow: hidden;

    .btn__text {
      color: white;
      white-space: nowrap;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }

    .btn-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
    }

    &::after {
      content: "";
      background: black; 
      opacity: 0.5;
      position: absolute;
      z-index: 10;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`