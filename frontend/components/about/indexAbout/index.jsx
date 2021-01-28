import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import Image from 'next/image';
import sal from 'sal.js';


const IndexAbout = ({className, data}) => {
  // decontruct data object from props 
  const {
    header,
    body,
    link_text,
    link_url,
    image,
  } = data;

  return (
    <section className={className}>
      <Container container maxWidth="lg">
        <Grid container justify={'center'} className="top">
          <Grid item xs={12} sm={6}>
            <h2>{header}</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>{body}</p>
            <div data-sal-delay="300">
              <PrimaryButton btnText={link_text}/>
            </div>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid item xs={12}>
            {
              image && (
                <Image
                  src={`http://localhost:1337${image.url}`}
                  alt="Picture of the author"
                  width={image.width}
                  height={image.height}
                />
              )
            }
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default styled(IndexAbout)`
  padding-top: ${props => props.theme.spacing[5]};

  .top {
    margin-bottom: ${props => props.theme.spacing[3]};
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }
`