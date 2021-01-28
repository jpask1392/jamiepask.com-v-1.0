import styled, { keyframes } from "styled-components"
import {mediaQueries} from "../../media_queries"

const slideUp = keyframes`
  from { transform: translateY(100%) }
  to { transform: translateY(-10%) }
`;

const slideRight = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const H1 = styled(({className, children}) => (
  <h1 className={className}> {children}
  </h1>)
)`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: 1;
  text-transform: lowercase;
`;

export const H2 = styled(({className, children}) => (
  <h2 className={className}>
    { children.split(' ').map((word, i) => (
      <span key={i}><span>{word}</span><span> </span></ span>
    ))}
  </h2>
))`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.heading};
  text-transform: lowercase;
  line-height: 1.2;

  span {
    position: relative;
  }

  span:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 18px;
    background: ${props => props.theme.color.primary};
    left: 0;
    right: 0;
    bottom: 3px;
    z-index: -1;
  }

  @media ${mediaQueries.md_up} {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`;

export const H3 = styled(({className, children}) => <h3 className={className}>{children}</h3>)`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.2;
  text-transform: lowercase;

  + p {
    margin-top: ${props => props.theme.fontSizes[2]};
  }
`;

export const P = styled(({className, children}) => <p className={className}>{children}</p>)`
  font-size: ${props => props.theme.fontSizes[5]};
  color: #19171D;
`;

const move = keyframes`
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
`;

export const WavyUnderline = styled(({className, children}) => (
  <div className={className}>{children}</div>
))`
  display: inline-block;
  padding-bottom: 10px;
  background: url("/icons/wavy.svg");
  background-repeat: repeat;
  background-position-x: 0%;
  background-position-y: calc(100% - 5px);
  background-size: auto auto;
  background-repeat: repeat-x;
  background-size: 55px; 
  animation: ${move} 5s linear infinite;
  animation-play-state: paused;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;

  a {
    text-decoration: none;
  }

  &:hover {
    animation-play-state: running;
  }
`

