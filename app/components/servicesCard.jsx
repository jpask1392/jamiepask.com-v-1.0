import styled from "styled-components";
import { mediaQueries } from '../media_queries';

const ServicesCard = ({ className, data }) => {
	return (
		<div className={`${className} services-card`}>
      <div className="services-card__logo">{data.icon}</div>
      <h5 className="services-card__title">{data.title}</h5>
      <div className="services-card__completed">
        <span className="count">{data.completed_count}</span>
        Completed
      </div>
      <div className="services-card__summary excerpt">{data.summary}</div>
		</div>
	)
}

export default styled(ServicesCard)`
  background: white;
  padding: ${props => props.theme.spacing[2]};
  box-shadow: ${props => props.theme.boxShadow};
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  @media ${mediaQueries.md_up} {
    border-radius: 20px;
    padding: ${props => props.theme.spacing[4]};
  }

  &.services-card {
    text-align: center;

    .services-card {
      &__logo {
        svg {
          width: 30px;

          @media ${mediaQueries.md_up} {
            width: 100px;
          }
        }
      }
  
      &__title {
        margin-bottom: 0;
        margin: auto;
        padding-top: 0;
        padding-bottom: 1rem;
        font-size: 0.8rem;

        @media ${mediaQueries.md_up} {
          max-width: 60%;
          padding-top: 1rem;
          font-size: ${props => props.theme.fontSizes[4]};
        }
      }
  
      &__completed {
        font-size: ${props => props.theme.fontSizes[4]};
        font-weight: ${props => props.theme.fontWeights.heading};
        line-height: 1;

        @media ${mediaQueries.md_up} {
          font-size: ${props => props.theme.fontSizes[2]};
        }

        .count {
          display: block;
          font-size: ${props => props.theme.fontSizes[1]};
          font-weight: ${props => props.theme.fontWeights.heading};
          line-height: 1;

          @media ${mediaQueries.md_up} {
            font-size: ${props => props.theme.fontSizes[0]};
          }
        }
      }
  
      &__summary {
        padding-top: 2rem;
        font-size: 0.8rem;

        @media ${mediaQueries.md_up} {
          padding-top: 3rem;
          font-size: ${props => props.theme.fontSizes[5]};
        }
      }
    }
  }
`
