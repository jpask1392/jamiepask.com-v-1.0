import styled from "styled-components"
import Link from 'next/link'
// import {PrimaryButton} from '../../../components/buttons';
import { Tabs, Panel } from './components/tabs';
import { Grid, Container } from "@material-ui/core";

const IndexServices = ({ className, data, type }) => {
  // decontruct data object from props 
  const {
    service
  } = data;

	return (
		<section className={className} data-scroll-section>
      <Container>
        <Grid container>
          <Grid item xs={12} className="header-wrapper">
            <h2>Services.</h2>
          </Grid>
          <Grid item xs>
            <Tabs>
              {service.map((serviceItem) => (
                <Panel key={serviceItem.id} label={serviceItem.name}>
                  {serviceItem.content}
                </Panel>
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </section>
	)
}

export default styled(IndexServices)`
  background: #FBFBFB;
  padding-top: ${props => props.theme.spacing[4]};
  padding-bottom: ${props => props.theme.spacing[4]};

  .header-wrapper {
    padding-bottom: ${props => props.theme.spacing[2]};
  }
`
