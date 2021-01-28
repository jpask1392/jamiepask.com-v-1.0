import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../buttons';
import Image from 'next/image';
import sal from 'sal.js';
import { H1, H2, H3, P } from '../../typography';


const Brands = ({className, data}) => {
  // decontruct data object from props 
  const {
    id,
    header,
    gallery,
  } = data;

  return (
    <section className={className}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs>
            <H3 className="header">{header}</H3>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid item xs={12}>
            <ul>
            {gallery.map(image => {
              return <li key={image.id}><img src={`http://localhost:1337${image.formats.thumbnail.url}`} alt=""/></li>
            })}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default styled(Brands)`
  padding-top: ${props => props.theme.spacing[3]};
  padding-bottom: ${props => props.theme.spacing[3]};

  .top {
    margin-bottom: ${props => props.theme.spacing[3]};
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }

  .header {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing[3]};
    text-transform: lowercase;
  }

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    flex-wrap: wrap;
    margin: 0;
    margin-bottom: -${props => props.theme.spacing[3]};

    li {
      flex-basis: 20%;
      align-items: center;
      max-height: 75px;
      margin-bottom: ${props => props.theme.spacing[3]};
      padding: 0 2rem;

      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
`