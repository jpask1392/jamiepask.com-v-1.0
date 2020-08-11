import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import { mediaQueries } from '../../media_queries'
import ServicesCard from '../../components/servicesCard';
import { 
  WordpressIcon,
  ShopifyIcon,
  ReactIcon,
  DesignIcon
} from '../../components/icons';

const HomeServices = props => {
  const cardData = [
    {
      "icon": <WordpressIcon />,
      "title": "Wordpress Development",
      "completed_count": 10,
      "summary": "Work in Wordpress Development? I’ve built up "
    },
    {
      "icon": <ShopifyIcon />,
      "title": "Shopify Development",
      "completed_count": 5,
      "summary": "Work in Wordpress Development? I’ve built up "
    },
    {
      "icon": <ReactIcon />,
      "title": "Modern Stack Development",
      "completed_count": 3,
      "summary": "Work in Wordpress Development? I’ve built up "
    },
    {
      "icon": <DesignIcon />,
      "title": "Custom Web Design",
      "completed_count": 3,
      "summary": "Work in Wordpress Development? I’ve built up "
    }
  ];

  return (
    <section className={props.className}>
      <Container>
        <Grid container spacing={0}>
          <Grid item md={7}>
            <Grid container spacing={4}>
              {cardData.map((card) => (
                <Grid item xs={6}>
                  <ServicesCard data={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item md={5}>
            <div className="content">
              <div className="content__introduction">
                <h2>Services</h2>
                <h3>Looking for the next member of your awesome team? </h3>
              </div>
              <p className="excerpt">
                On top of the following and because of a strong foundational knowledge base, I’m able to quickly pick up new technologies to help immerse myself in your chosen tech stack.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
};

export default styled(HomeServices)`
  padding-bottom: ${props => props.theme.spacing[5]};

  & .content {
    margin-top: 3rem;
    padding: 0;
    text-align: center;

    @media ${mediaQueries.md_up} {
      margin-top: 5rem;
      padding: ${props => props.theme.spacing[5]};
      position: sticky;
      top: 0;
      text-align: left;
    }

    &__introduction {
      padding-bottom: 2rem;
    }
  }
`