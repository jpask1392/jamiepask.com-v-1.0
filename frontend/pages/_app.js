import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { mediaQueries } from '../media_queries';
import App from 'next/app'
import { GlobalStyles } from '../styles/globalStyles'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  let getTheme = lightTheme;

  return (
    <ThemeProvider theme={getTheme}>
      <Component {...pageProps} />
      <GlobalStyles currentTheme={getTheme} />
    </ThemeProvider>
  )
}
