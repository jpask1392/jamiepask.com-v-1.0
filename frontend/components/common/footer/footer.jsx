import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SocialIcons from './icons/socialIcons';
// import { ArrowIcon, InstagramIcon } from '../components/icons';
import { mediaQueries } from '../../../media_queries';
import HeaderSplitter from './headerSplitter';
import Link from 'next/link';
import { PrimaryButton } from '../buttons';
import Instagram from "./icons/instagram";

const Footer = ({className, footerData, instagram}) => { 
  const {
    header,
    cta_header,
    cta_link,
    cta_text,
    footer_text,
  } = footerData;

  return (
    <footer className={className} data-scroll-section>

      <HeaderSplitter header={header} tag="h3" />
      { instagram.data &&  <Instagram instagram={instagram} /> }
    
      <Container maxWidth="xl" className="footer__primary">
        <div style={{maxWidth: 500}}>
          {footer_text}
        </div>

        <div className="footer__contact">
          <h3>{cta_header}</h3>
          <Link href={cta_link}>
            <a><PrimaryButton color="white" btnText={cta_text}/></a>
          </Link>
        </div>
        <SocialIcons />
      </Container>
      
      
      <div className="footer__secondary">
        <Container maxWidth="xl">
          © Designed and developed by Jamie Pask
        </Container>
      </div>
    </footer>
  )
}

export default styled(Footer)`
  .header-splitter {
    background-color: white;
  }

  svg.torn {
    transform: rotate(180deg);
    position: relative;
    top: 0px;
  }
  
  .footer__contact {
    text-align: right;
    margin-bottom: 5rem;
    margin-right: ${props => props.theme.spacing[3]};
    flex: 1;

    .mailto-link {
      color: black;
      text-decoration: none;
    }

    @media ${mediaQueries.md_up} {
      margin-bottom: 0;
    }
  }

  .footer__primary {
    padding-bottom: 5rem;

    h3 {
      margin-bottom: 2rem;
    }

    @media ${mediaQueries.md_up} {
      display: flex;
      justify-content: space-between;
    }

    .footer__arrow {
      display: flex;
      align-self: center;
      left: 50%;
      text-align: center;
      justify-content: center;
      cursor: pointer;

      @media ${mediaQueries.md_up} {
        transform: translateX(-50%);
        position: absolute;
      }

      svg {
        transform: rotate(-90deg);
      }
    }

    .social-icons {
      margin-top: 5rem;
      text-align: center;

      @media ${mediaQueries.md_up} {
        margin-top: 0;
        text-align: left;
      }
    }
  }

  .footer__secondary {
    background: black;
    text-align: right;
    color: white;
    padding: ${props => props.theme.spacing[0]}
  }

  .instagram {
    &__media {
      display: flex;
      margin-bottom: ${props => props.theme.spacing[4]};
      overflow: hidden;
    }

    &__header {
      text-align: center;
      margin-bottom: ${props => props.theme.spacing[2]};
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 1rem;

        svg {
          width: 100%;
          height: 100%
        }
      }
    }

    &__item {
      position: relative;
      flex: 0 0 20%;
      overflow: hidden;

      .image {
        height: 0;
        padding-bottom: 100%;
        width: 100%;

        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: all 0.3s;
        }

        .hover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s;

          .text {
            margin-top: 50px;
            font-weight: 700;
            transition: all 0.3s;

            .icon {
              width: 20px;
              height: 20px;
              display: block;
              margin: auto;

              svg {
                fill: white;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .hover {
          opacity: 1;

          .text {
            margin-top: 0;
          }
        }
      }
    }
  }
`
