import styled from 'styled-components';
import SocialIcons from '../../components/common/socialIcons';
import { PrimaryButton } from '../../components/common/buttons';
import Link from 'next/link';
import { mediaQueries } from '../../media_queries';
import { Grid, Container } from "@material-ui/core"
import { H1, H2, H3, P } from '../../components/common/typography';
import Image from 'next/image';
import { ScrollIcon, DoubleArrow } from './icons';
import tinycolor from "tinycolor2";

// https://codepen.io/anthonydugois/pen/mewdyZ

// Define component
const PageHeader = (props) => {
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

  return (
  <header className={props.className} data-scroll-section>
    <div className={`content-wrapper ${is_full_height && "content-wrapper--full-height"}`}>
      <Container>
        <Grid container justify="center">
          <div className="content">
            <div className="content__text">
              <H1>{header}</H1>
              {subtext && <H3>{subtext}</H3>}
            </div>
            <SocialIcons />
            {is_full_height && <span className="scroll-icon"><ScrollIcon /></span>}
          </div>
        </Grid>
      </Container>
    </div>
  </header>
)};

// Style component
export default styled(PageHeader)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${props => props.theme.color.primary};
  }

  .content {
    display: flex;
    width: 100%;
    justify-content: center;
    color: white;

    &__text {
      position: relative;
      z-index: 1;
      text-align: center;
    }
  }

  .content-wrapper {
    height: 70vh;
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.primary};

    &--full-height {
      height: 100vh;

      .content {
        padding-top: 0;
      }
    }
  }

  .image {
    position: absolute;
    right: 242px;
    top: 0;
    bottom: 0;
    width: 100%;

    img {
      object-fit: cover;
    }
  }

  h3 {
    max-width: 700px;
    margin-top: ${props => props.theme.spacing[2]};
  }
  
  @media ${mediaQueries.md_up} {
    
  }

  & .btn-menu__text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: ${props => props.theme.fontFamily.excerpts};
    text-transform: uppercase;
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }

  h1 {
    margin: 0;
    text-transform: lowercase;
    font-size: 90px;

    @media ${mediaQueries.md_up} {
      
    }
  }

  & .social-icons {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: absolute;
    right: ${props => props.theme.spacing[4]};
  }

  .circle-link {
    width: 85px;
    height: 85px;
    background: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    border: 7px solid ${(props) => {
      let color = tinycolor(props.theme.color.primary).darken(10); 
      return color.toRgbString();
    }};

    svg {
      width: 15px;
      height: 15px;
    }
  }

  .content__text {
    
  }

  .scroll-icon {
    position: absolute;
    right: 100px;
    width: 50px;
    height: 50px;
    bottom: 50px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
