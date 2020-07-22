import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext 
} from 'pure-react-carousel';
import { PrimaryButton } from '../../components/buttons';

const BlogSlideshow = ({className, posts}) => {
  return (
  <div className={className}>
    <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={100}
        totalSlides={posts.length}
      >
        <Container>
        <Grid container spacing={3} className='slideshow'>  


          <Grid item xs={11}>
            <Slider className='slideshow__image'>
              {posts.map((post, index) => (
                <Slide key={index} index={index}>
                  I am slide {index}
                </Slide>
              ))}
            </Slider>
            <div className="slideshow__buttons">
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </div> 
          </Grid>


          <Grid item xs={4} className="slideshow__text">
            <div className="slideshow__inner-text">
              <Slider>
                {posts.map((post, index) => (
                  <Slide key={index} index={index} >
                    <h4>{post.title}</h4>
                    <p className="excerpt">{post.excerpt}</p>
                    <a href={`/${post.slug}`}><PrimaryButton /></a>
                    <a href="/blog">View All Posts</a>
                  </Slide>
                ))}
              </Slider>
            </div>
          </Grid>
          
        </Grid>
        </Container>
      </CarouselProvider>
      
  </div>
  )
};

export default styled(BlogSlideshow)`
  padding-top: 100px;
  padding-bottom: 100px;

  & .slideshow {
    position: relative;

    &__image {
      position: relative;
      background: #F3F3F5;
      height: 0;
      padding-bottom: 56% !important;
    }

    &__text {
      position: absolute;
      width: 100%;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 70%;
    }

    &__inner-text {
      padding: ${props => props.theme.spacing[3]};
      background: white;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      box-shadow: ${props => props.theme.boxShadow};

      .carousel__slider-tray {
        display: flex;
      }

      .carousel__slide {
        display: flex;
        height: 100%;
      }

      .carousel__inner-slide {
        height: auto;
        position: static;
      }
    }

    &__buttons {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 15%;
    }
  }
`;
