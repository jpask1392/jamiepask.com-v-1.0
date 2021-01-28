import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import Image from 'next/image';
import sal from 'sal.js';
import { H1, H2, H3, P } from '../../components/typography';


const TextOverImage = ({className, data}) => {
  // decontruct data object from props 
  const {
    header,
    text,
    image
  } = data;

  return (
    <section className={`${className} pull-up`} data-scroll-section>
      <Container container maxWidth="lg">
        <Grid container className="wrapper">
          <Grid item xs={12} sm={9} className="image-block">
            <Image
              src={`http://localhost:1337${image.url}`}
              alt="Picture of the author"
              layout="fill"
            />
          </Grid>
          <Grid item xs={12} sm={6} className="text-block">
            <H3>{header}</H3>
            <P>{text}</P>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default styled(TextOverImage)`
  padding-top: 240px;
  background: #F8F8F8;

  &:nth-child(2n) {
    .image-block {
      right: auto;
      left: 0;
    }

    .wrapper {
      justify-content: flex-end;
    }
  }

  &.pull-up {
    margin-top: -${props => props.theme.spacing[5]};
  }

  .wrapper {
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
  }

  .image-block {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    bottom: 0;
    width: 100%;

    img {
      object-fit: cover;
    }
  }

  .text-block {
    padding: ${props => props.theme.spacing[3]};
    background: white;
    position: relative;

    h3 {
      text-transform: lowercase;
    }
  }

  .top {
    margin-bottom: ${props => props.theme.spacing[3]};
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }
`