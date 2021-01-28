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
    '8.75rem',    // 0 - 140px // hero text
    '3.125rem',   // 1 - 50px
    '1.6rem',   // 2 - 30px
    '1.5rem',    // 3 - 20px
    '1.125rem',   // 4 - 18px
    '1rem',       // 5 - 16px Base Size
    // '0.875rem',       // 6 - 14px Base Size
  ],
  fontWeights: {
    body: 300,
    subheading: 900,
    link: 600,
    bold: 700,
    heading: 900,
  },
  lineHeights: {
    body: 2,
    heading: 1,
    code: 1.6,
  },
  fontFamily: {
    excerpts: 'roboto-mono, monospace',
    body: 'proxima-nova, sans-serif',
    headings: 'synthese, sans-serif'
  },
  spacer: 4,
  spacerUnit: 'px',
  get spacing() {
    return (
      [
        this.spacer * 4 + this.spacerUnit,    // 0 - 16px
        this.spacer * 5 + this.spacerUnit,    // 1 - 20px
        this.spacer * 10 + this.spacerUnit,   // 2 - 40px
        this.spacer * 20 + this.spacerUnit,   // 3 - 80px
        this.spacer * 25 + this.spacerUnit,   // 4 - 100px
        this.spacer * 30 + this.spacerUnit    // 5 - 120px
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
  color: {
    primary: '#0DA1EB',
    primaryLight: '#45BEFA',
    secondary: '#ffffff',
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