import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import Image from 'next/image';
import sal from 'sal.js';
import { H1, H2, H3, P } from '../../components/typography';


const IntroBlock = ({className, data}) => {
  // decontruct data object from props 
  const {
    header,
    text
  } = data;

  return (
    <section className={`${className}`} data-scroll-section>
      <Container container maxWidth="lg">
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={8} className="content">
            <H2  className="header">{header}</H2>
            <P className="body">{text}</P>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default styled(IntroBlock)`
  padding-top: ${props => props.theme.spacing[2]};

  .content {
    padding: ${props => props.theme.spacing[3]};
    background: white;
  }

  .header {
    margin-bottom: ${props => props.theme.spacing[2]};
    text-align: center;
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }
`