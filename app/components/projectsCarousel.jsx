import { 
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import { Image } from "cloudinary-react"
import { PrimaryButton } from '../components/buttons'
import { Grid, Container } from "@material-ui/core"
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const ProjectsCarousel = ({allProjects, className}) => (
  <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={1000}
      totalSlides={allProjects.length}
      className={className}
    >
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Slider 
            className='slideshow__image' 
            classNameAnimation="animation">
            {allProjects.map((project, index) => (
              <Slide 
                key={index} 
                index={index}
                classNameVisible="animation--visible"
                classNameHidden="animation--hidden">
                {project.featuredImage && (
                  <Image
                    cloudName='djetpo84s'
                    publicId={project.featuredImage.id}
                    width='100%'
                  />
                )}
              </Slide>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={6}>
          <Slider className='slideshow__text'>
            {allProjects.map((project, index) => (
              <Slide key={index} index={index}>
                <div className="content">
                  {project.logo && (
                    <Image
                      cloudName='djetpo84s'
                      publicId={project.logo.id}
                      width='100%'
                      className="logo"
                    />
                  )}
                  <h4>{project.title}</h4>
                  {project.tags.map(tag => <span>{tag.name}</span>)}
                  <p className="excerpt">{project.excerpt}</p>
                  <Link href={`projects/${project.slug}`}><a><PrimaryButton /></a></Link>
                </div>
              </Slide>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>

    <div className="slideshow__buttons">
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </div> 
  </CarouselProvider>
)

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default styled(ProjectsCarousel)`
  padding: ${props => props.theme.spacing[5]} 0;
  position: relative;

  .slideshow__buttons {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
  }

  .slideshow__text .content {
    padding: ${props => props.theme.spacing[5]};

    .logo {
      width: 150px;
    }
  }

  .slideshow__image {
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
  }

  .animation {
    transition: opacity 1s;

    &--visible {
      transition: opacity 1500ms;
      opacity: 0.5 !important;
    }

    &--hidden {
      transition: opacity 1500ms;
      opacity: 1;
    }
  }
`;