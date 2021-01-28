import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

const ProjectSlideshow = ({className}) => {
  const slides = [
    1, 2, 3
  ];

  return (
  <div className={className}>
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={slides.length}
      >
        <Container className='slideshow'>
        <Slider>
          {slides.map((slide, index) => (
            <Slide index={index} className='slideshow__image'>
              I am slide {index}
            </Slide>
          ))}
        </Slider>
        <DotGroup />
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </Container>
      </CarouselProvider>
  </div>
  )
};

export default styled(ProjectSlideshow)`
  background: grey; 
  width: 100%; 

  & .slideshow {
    padding-top: 100px;
    padding-bottom: 100px;

    &__image {
      display: block;
      background: red;
      height: 400px;
    }
  }
`;
