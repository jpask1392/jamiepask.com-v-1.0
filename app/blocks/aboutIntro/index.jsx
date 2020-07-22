import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import { mediaQueries } from '../../media_queries'

const AboutIntro = props => {
  return (
    <section className={props.className}>
      <Container>
      <div className="introduction">
      <h2>I'm Jamie,</h2>
      <h3>a web developer from the United Kingdom, <br></br>living it up in the city of angels.</h3>
      </div>

      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <blockquote className="split-paragraph excerpt">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no Lorem ipsum dolor sit amet, 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no Lorem ipsum dolor sit amet, 
            <a href="/about" className="link read-more-btn">Read More</a>
            </blockquote>
          </Grid>
        </Grid>
        </Container>
      </Container>
    </section>
  )
};

export default styled(AboutIntro)`
  background: yellow;
  padding: ${props => props.theme.spacing[5]} 0;

  & .introduction {
    padding-bottom: 2rem;

    @media ${mediaQueries.md_up} {
      padding-bottom: 5rem;
    }
  }

  & .split-paragraph {
    border-color: black;

    @media ${mediaQueries.md_up} {
      column-count: 2;
    }
  }

  & .read-more-btn {
    display: block;
    padding-top: 2rem;
  }
`