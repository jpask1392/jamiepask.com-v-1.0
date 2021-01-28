import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { mediaQueries } from '../media_queries';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: ${props => props.currentTheme.fontFamily.body};
  font-size: ${props => props.currentTheme.fontSizes[5]};
  font-weight: ${props => props.currentTheme.fontWeights.body};
  line-height: ${props => props.currentTheme.lineHeights.body};
}

.excerpt, .excerpt p {
  font-family: ${props => props.currentTheme.fontFamily.excerpts};
  font-size: ${props => props.currentTheme.fontSizes[5]};
  line-height: ${props => props.currentTheme.lineHeights.body};
  font-weight: ${props => props.currentTheme.fontWeights.subheading};
}

// h1 {
//   font-size: ${props => props.currentTheme.fontSizes[0]};
//   font-weight: ${props => props.currentTheme.fontWeights.heading};
// }

// h2 {
//   font-size: ${props => props.currentTheme.fontSizes[2]};
//   font-weight: ${props => props.currentTheme.fontWeights.heading};

//   @media ${mediaQueries.md_up} {
//     font-size: ${props => props.currentTheme.fontSizes[1]};
//   }
// }

h2 + h3 {
  margin-top: 1rem;
}

// h3 {
//   font-size: ${props => props.currentTheme.fontSizes[3]};
// }

h4 {
  font-size: ${props => props.currentTheme.fontSizes[2]};
  font-weight: ${props => props.currentTheme.fontWeights.heading};
}

h1,
h2,
h3,
h4,
h5 {
  font-family: ${props => props.currentTheme.fontFamily.headings};
  white-space: pre-wrap;
  margin: 0;
  line-height: ${props => props.currentTheme.lineHeights.heading};
}

h3 {
  font-weight: ${props => props.currentTheme.fontWeights.heading};
  font-size: ${props => props.currentTheme.fontSizes[2]};
}

h5 {
  font-weight: ${props => props.currentTheme.fontWeights.bold};
  font-size: ${props => props.currentTheme.fontSizes[5]};
  text-transform: uppercase;
  margin-bottom: 2rem;
}

p {
  margin-top: 0;
  &:last-of-type {
    margin-bottom: 0;
  }
}

blockquote {
  border-left: 3px solid #E1E642;
  margin: 1rem 0;
  padding: 0 2rem;
}

img {
  width: 100%;
}

a.link {
  color: black;
  font-weight: ${props => props.currentTheme.fontWeights.bold};
}

.MuiContainer-root.MuiContainer-maxWidthLg {
  max-width: 1140px
}

.MuiContainer-root.MuiContainer-maxWidthXl {
  max-width: 1408px;
}
`