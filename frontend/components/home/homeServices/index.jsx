import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../buttons';
import { mediaQueries } from '../../../media_queries'
import ServicesCard from '../../components/servicesCard';
import { 
  WordpressIcon,
  ShopifyIcon,
  ReactIcon,
  DesignIcon
} from '../../common/icons.jsx';

const HomeServices = props => {
  const cardData = [
    {
      "icon": <WordpressIcon />,
      "title": "Wordpress Development",
      "completed_count": 10,
      "summary": "Build custom themes and plugins with Wordpress."
    },
    {
      "icon": <ShopifyIcon />,
      "title": "Shopify Development",
      "completed_count": 5,
      "summary": "Build custom themes and apps with Shopify."
    },
    {
      "icon": <ReactIcon />,
      "title": "Modern Stack Development",
      "completed_count": 3,
      "summary": "Build modern Javascript web applications."
    },
    {
      "icon": <DesignIcon />,
      "title": "Custom Web Design",
      "completed_count": 3,
      "summary": "Design custom styles with Adobe XD."
    }
  ];

  return (
    <section className={props.className}>
      <Container>
        <Grid container spacing={0}>
          <Grid item md={7}>
            <Grid container spacing={4}>
              {cardData.map((card, i) => (
                <Grid item xs={6} key={i}>
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
              Recognizing the importance of a strong foundation of programming basics, I’m able to quickly pick up new technologies and fully immerse myself in your chosen tech stack.
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