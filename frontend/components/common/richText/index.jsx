import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../buttons';
import { H1, H2, H3, P } from '../typography';
import Image from 'next/image';
import sal from 'sal.js';
import tinycolor from "tinycolor2";

const RichText = ({className, data}) => {
  // decontruct data object from props 
  const {
    header,
    body,
    link_text,
    link_url,
    background_color
  } = data;

  return (
    <section className={className} data-scroll-section>
      <Container maxWidth="lg">
        <Grid container justify={'center'} className="top">
          <Grid item xs={12} sm={6} className="content">
            <H3>{header}</H3>
            <P>{body}</P>
            <div>
              <PrimaryButton btnText={link_text} onDark={true}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default styled(RichText)`
  padding-top: ${props => props.theme.spacing[4]};
  padding-bottom: ${props => props.theme.spacing[4]};
  background: ${props => props.data.background_color};
  position: relative;
  ${props => {
    let color = tinycolor(props.data.background_color);
    if (color.isDark()) return 'color: white;'
  }}

  &::after {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent;
    border-top-color: #113156;
  }

  h3,
  p {
    ${props => {
      let color = tinycolor(props.data.background_color);
      if (color.isDark()) return 'color: white;'
    }}
  }

  .content {
    text-align: center;
  }

  .btn {
    margin-top: ${props => props.theme.spacing[2]};
  }
`