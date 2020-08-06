// https://brianlovin.com/overthought/adding-dark-mode-with-next-js

// define breakpoints
const breakpoints = {
  sm:  425,
  md:  768,
  lg:  1024,
  xl:   1440
}

const defaultTheme = {  
  mediaQueries: {
    sm_up:  `(min-width: ${breakpoints.sm}px)`,
    md_up:  `(min-width: ${breakpoints.md}px)`,
    lg_up:  `(min-width: ${breakpoints.lg}px)`
  },
  fontSizes: [
    '6.5rem',   // 0
    '3rem',     // 1 - 50px
    '2.2rem',   // 2 - 
    '1.6rem',   // 3 - 
    '1.25rem',  // 4 - 16px
    '1rem',     // 5 - 14px Base Size
  ],
  fontWeights: {
    body: 300,
    subheading: 400,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 2,
    heading: 1.6,
    code: 1.6,
  },
  fontFamily: {
    excerpts: 'roboto-mono, monospace',
    body: 'acumin-pro',
    headings: 'acumin-pro'
  },
  spacer: 1.14,
  spacerUnit: 'rem',
  get spacing() {
    return (
      [
        this.spacer / 4 + this.spacerUnit,    // 0
        this.spacer / 2 + this.spacerUnit,    // 1
        this.spacer + this.spacerUnit,        // 2
        this.spacer * 1.75 + this.spacerUnit, // 3
        this.spacer * 3 + this.spacerUnit,    // 4
        this.spacer * 5 + this.spacerUnit     // 5
      ]
    )
  },
  boxShadow: '0 12px 16px rgba(0,0,0,0.1)',
};

const light = {
  bg: {
    primary: 'yellow',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  }
}

const dark = {
  bg: {
    primary: '#050505',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  },
  // ...
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }