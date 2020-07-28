import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { mediaQueries } from '../media_queries';

const GridLines = ({className}) => (
  <div className={className}>
    <Container>
    <Grid container spacing={0}>
      {[...Array(6)].map((e, i) => (
        <Grid item xs key={i}>
          <div className="gridline"></div>   
        </Grid>
      ))} 
    </Grid>
    </Container>
  </div>
);

export default styled(GridLines)`
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1400;

  & .MuiGrid-item {
    &:first-of-type .gridline {
      border-left: 1px solid grey;
    }

    .gridline {
      border-right: 1px solid grey;
      height: 100vh;
      opacity: 0.15;
    }

    &:nth-child(odd) {
      .gridline {
        border-right-color: transparent;
      }
    }
  }

  @media ${mediaQueries.md_up} {
    & .MuiGrid-item:nth-child(odd) {
      .gridline {
        border-right-color: grey;
      }
    }
  }
`;
