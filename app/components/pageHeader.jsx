import styled from 'styled-components';
import SocialIcons from '../components/socialIcons';
import { PrimaryButton } from './buttons';
import Link from 'next/link';
import { mediaQueries } from '../media_queries'

// Define component
const PageHeader = (props) => { 
  return (
  <header className={props.className}>
    <div className="content">
      <h1>{props.data.title}</h1>
      {props.data.cta_link && 
        <>
        <Link href={props.data.cta_link} passHref>
          <a target={props.data.isProject ? "_blank" : ''}>
            <PrimaryButton color="black"/>
          </a>
        </Link>
        <span className="btn-menu__text">
          {props.data.isProject ? "Visit Site" : 'Projects'}
        </span>
        </>
      }
    </div>
    <SocialIcons />
    <svg className="arch-base" viewBox="0 0 1129.84 45.13" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d="m0 0c10.42-.14 21 2.56 31.31 4 7.48 1 17.76.78 24.4 4.14a72.56 72.56 0 0 0 19.79 7 126.57 126.57 0 0 1 15.89 4.17c5.33 1.75 11 1.86 16.45 3.29 3 .79 5.89 1.8 8.83 2.28 6.13 1 13.22 0 19.45 0a79.2 79.2 0 0 1 15.5 1.56c4.56.87 9 2.92 13.57 4 5.27 1.2 10.57 1.19 16 1a103.19 103.19 0 0 0 15-1.62c5.08-1 9.68-3 14.75-3.94 7.7-1.37 15.12-3.34 22.81-4.86a61.69 61.69 0 0 1 12.76-1.34c1.34 0 2.75-.11 4.09 0 2.32.14 4.28 1.18 6.56 1.41 4.13.41 8.08 1.07 12.27 1.19 4.53.13 8.71 1.95 13.31 1.41 3.19-.37 6.55-1.1 9.71-1.66 6.31-1.12 12.76-1.79 19.21-2.64 10.64-1.4 21-2.62 31.6-4.56 5.62-1 11.18-2.07 16.79-3.26 3-.64 6.18-1.18 9.19-1.95s6-.89 8.8-1.6c2.93-.75 4.73-1.36 7.88-1.34h13.44c4.23 0 8.64-.36 12.86-.07 3 .22 5.79 1.29 8.83 1.44 3.89.19 7.83-.38 11.72-.13 5.44.35 10.38 1.41 15.93 1.34a28.15 28.15 0 0 1 11.53 2.6c8.38 3.44 18.11 5.55 26.69 7.56 2.15.51 4.06 0 6.21.22 2.47.22 4.71 1.2 7.17 1.44 4.64.47 9.36-.59 14 .23 4.37.77 8.67.69 13.15 1.3a116.16 116.16 0 0 0 11.63 1c3.82.15 7 1.72 10.72 2.35 4.53.77 9.2.53 13.76 1.23 2.8.43 5.43 1.3 8.22 1.7 3.86.55 7.51 1.61 11.33 2.28a215.67 215.67 0 0 0 35.39 2.93c10.26.1 18.16-2.76 27.33-6.58a26.61 26.61 0 0 1 5.38-1.46c3.52-.79 4.58-2.82 7.31-4.48 4-2.41 9.92-4 14.51-4.52 13.35-1.59 26.62 3.44 39.83 4.05 3 .14 5.26 1.09 8.16 1.26 2.26.14 4.33-.2 6.59.23 3.17.61 6 2.38 9 3.36a69.09 69.09 0 0 0 11.3 2.93c1.91.26 3.71-.14 5.66.26s3 1.1 5 1.1c4.71 0 9.34-2.31 14-2.66 6.05-.46 11.82-3.29 17.82-4.27 13.06-2.14 25.66-5.9 38.48-9.16 9.14-2.32 17.52-4.84 27.15-4.85h14.37c2.81 0 4.47-.61 7.06-1.05a51.64 51.64 0 0 1 8.89-.28q16.33 0 32.68 0c6.36 0 12.43 1.29 18.71 1.33 2.55 0 3.93-.11 6.31.92 4.24 1.82 9.49 4.12 14.14 4.36 3.53.19 5.54 1.23 9.26 1.2q10.85-.09 21.69 0c5.31 0 9.8-1.54 14.94-2.31 2.87-.44 5.68-.11 8.56-.58 2.5-.41 5.09-1.56 7.36-2 6.12-1.26 14.37-.68 20.21.71 5.55 1.33 12.41.25 18.15.29 6.32 0 11.82-2.73 18.14-2.61 3.41.07 5.83-1.12 9.13-1.26s5.74-1.36 9.09-1.34c5.67 0 12.72-1.14 18.18.29 1.37.36 2.54.73 3.93 1 1.59.32 2.33 1 3.8 1.37 2.63.64 6.41-.07 9.15-.07v36h-1129.77z" fill="#fff"/></svg>
    
  </header>
)};

// Style component
export default styled(PageHeader)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bg.primary};
  text-align: center;
  position: relative;
  height: 80vh;
  max-height: 80vh;
  padding-bottom: 57px;
  box-sizing: content-box;

  @media ${mediaQueries.md_up} {
    height: 42vw;
  }

  & .btn-menu__text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: ${props => props.theme.fontFamily.excerpts};
    text-transform: uppercase;
  }

  & .content {
    max-width: 900px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3.9%;
  }

  & h1 {
    line-height: 1;
    margin: 0;
    margin-bottom: 4rem;
    font-size: 4rem;

    @media ${mediaQueries.md_up} {
      font-size: ${props => props.theme.fontSizes[0]};
    }
  }

  & .arch-base {
    width: 100%;
    position: absolute;
    bottom: 0;
    fill: white;
  }

  & .social-icons {
    position: absolute;
    bottom: 8%;
  }
`;
