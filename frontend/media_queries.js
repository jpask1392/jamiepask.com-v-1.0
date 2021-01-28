/**
 * Define breakpoints to import 
 * into React components
 */

export const breakpoints = {
  sm:  425,
  md:  768,
  lg:  1024,
  xl:   1440
};

export const mediaQueries = {
  sm_up:  `(min-width: ${breakpoints.sm}px)`,
  md_up:  `(min-width: ${breakpoints.md}px)`,
  lg_up:  `(min-width: ${breakpoints.lg}px)`
};