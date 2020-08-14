import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { mediaQueries } from '../../media_queries'
import { assetDir } from '../../config'

const AboutIntro = props => {
  
  return (
    <section className={props.className}>
      <Container>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <div className="content">
              <div className="content__introduction">
                <h2>I'm Jamie,</h2>
                <h3>a web developer from the United Kingdom, (yes- the accent is real) currently living in Los Angeles. </h3>
              </div>
              <blockquote className="excerpt">
              Born and raised in Cardiff, United Kingdom, I made the move to California in April 2019 to be with my now wife. After jumping through a plethora of hoops to obtain my residency, I’m now excited to establish and develop my career in the states. 
              </blockquote>
              <a href="/about" className="link read-more-btn">Read More</a>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="image">
              <div className="image__wrapper">
              <img src={`${assetDir}/home__about.png`} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
};

export default styled(AboutIntro)`
  background: yellow;
  padding: 12rem 0;
  padding-top: 4rem;
  padding-bottom: 9rem;
  margin-bottom: -5rem;

  @media ${mediaQueries.md_up} {
    padding-top: 12rem;
    padding-bottom: 12rem;
    align-items: center;
  }

  & .MuiGrid-container {
    justify-content: center;
  }

  & .content {
    max-width: 500px;
    padding-right: 2rem;

    &__introduction {
      padding-bottom: 2rem;
      text-align: center;

      @media ${mediaQueries.md_up} {
        text-align: left;
      }
    }
  
    .split-paragraph {
      border-color: black;
    }
  
    .read-more-btn {
      display: block;
      padding-top: 2rem;
      text-align: center;

      @media ${mediaQueries.md_up} {
        text-align: left;
      }
    }
  }

  & .image {
    display: none;

    @media ${mediaQueries.md_up} {
      display: flex;
      align-items: center;
    }

    &__wrapper {
      position: relative;
      font-size: 0;
    
      img {
        position: relative;
        border-radius: 20px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #E6EB38;
        left: -15px;
        bottom: -15px;
        border-radius: 20px;
      }
    }
  }
`