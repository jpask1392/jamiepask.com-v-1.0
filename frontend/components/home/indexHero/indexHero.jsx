import styled from 'styled-components';
import SocialIcons from '../../common/socialIcons';
import Link from 'next/link';
import { mediaQueries } from '../../../media_queries';
import { Grid, Container, colors } from "@material-ui/core"
import { H1, H2, H3, P } from '../typography';
import Image from 'next/image';
import { ScrollIcon, DoubleArrow } from '../../common/icons.jsx';
import { PrimaryButton } from "../../common/buttons";
import tinycolor from "tinycolor2";
// import LocomotiveScroll from 'locomotive-scroll';

// https://codepen.io/anthonydugois/pen/mewdyZ

// Define component
const IndexHero = (props) => {
  // decontruct data object from props 
  const {
    header, 
    id,
    subtext,
    link_text,
    link_url,
    is_full_height,
    image
  } = props.data;

  const [slide, setSlide] = React.useState(1);

  return (
  <header className={props.className} data-scroll-section>
    <div className="hero-text">
      <H1>{header}</H1>
    </div>

    <div className="spacer"></div>

    <div className="hero-carousel">
      <div className="slide-data">
        <div className="carousel-btn prev-btn">Prev</div>
        <div className="slide-content">
          <H3>Love Leo Rescue</H3>
          <P>Formally educated in Architectural Design and Technology, graduating in 2014 with</P>
          <PrimaryButton>Button</PrimaryButton>
        </div>
        <div className="carousel-btn next-btn">Next</div>
      </div>

      {image && (
        <Grid item md={5} className="image">
          <Image
            src={`http://localhost:1337${image.url}`}
            alt="Picture of the author"
            // width={image.width}
            // height={image.height}
            layout="fill"
            data-scroll
            data-scroll-speed="-2"
          />
        </Grid>
      )}
    </div>

    <div className="hero-actions">
      <SocialIcons />
      <a className="scroll-icon"><ScrollIcon /></a>
    </div>

  </header>
)};

// Style component
export default styled(IndexHero)`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

  .spacer,
  .hero-actions {
    flex: 0.1;
  }

  .hero-carousel {
    display: flex;
    justify-content: center;
    flex: 1;

    .slide-data {
      display: flex;
      align-items: center;
      align-self: flex-end;
      margin-bottom: 100px;
    }

    .image {
      position: absolute;
      height: 100%;
      width: 100%;

      img {
        object-fit: cover;
      }
    }

    .carousel-btn {
      background: white;
      position: relative;
      z-index: 1;
      background: white;
      border-radius: 100px;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .slide-content {
      background-color: white;
      border-radius: 25px;
      padding: 1.5rem 2rem;
      padding-bottom: 2.6rem;
      text-align: center;
      max-width: 365px;
      position: relative;
      z-index: 1;
      margin-right: 2rem;
      margin-left: 2rem;

      h2 { 
        margin-bottom: 1rem;
      }

      .btn {
        top: 100%;
        position: absolute;
        background: white;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .hero-text {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 100px));
    left: 0;

    h1 {
      color: white;
      text-align: center;
    }
  }

  .hero-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .social-icons {
      margin-bottom: 100px;
    }

    a {
      margin-left: auto;
      width: 44px;
    }

    .scroll-icon {
      display: block;

      svg {
        width: 44px;
      }
    }
  }
`;
