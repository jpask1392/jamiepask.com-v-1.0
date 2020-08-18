import styled from "styled-components";
import { mediaQueries } from '../media_queries';

const ServicesCard = ({ className, data }) => {
	return (
		<div className={`${className} services-card`}>
      <svg className="background-drip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 42"><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path d="M0,0H55a13.97523,13.97523,0,0,0-6,7c-2,5,2,8,2,15,0,6-1,8-4,8s-7-3-7-7,3-7,2-11-6,0-7,2,1,15,1,19c0,5.099-1,9-4,9-3.16228,0-3.99155-5-4-9-.00751-3.55371,1.97144-13.30536,1-19-.69333-4.06439-5,0-8,0s-4-5-7-5-3,2-3,5,1,4,0,7-8,4.07107-8-3c0-7,2-8,2-13C5,.75736,0,0,0,0Z"/></g></g></svg>
      <h5 className="services-card__title">{data.title}</h5>
      <div className="services-card__logo">{data.icon}</div>
      <div className="services-card__summary excerpt">{data.summary}</div>
      <hr></hr>
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
    display: flex;
    flex-direction: column;

    .background-drip {
      position: absolute;
      top: 0;
      width: 120%;
      left: -10%;
      opacity: 0.03;
      z-index: -1;
    }

    hr {
      border: none;
      height: 2px;
      background: lightgrey;
      width: 75px;
      margin-top: 2rem;
    }

    .services-card {
      &__logo {
        padding-top: 2rem;
        padding-bottom: 2rem;

        @media ${mediaQueries.md_up} {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        svg {
          width: 75px;

          @media ${mediaQueries.md_up} {
            width: 100px;
          }
        }
      }
  
      &__title {
        margin-bottom: 0;
        margin: auto;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 0.8rem;

        @media ${mediaQueries.md_up} {
          max-width: 60%;
          font-size: ${props => props.theme.fontSizes[4]};
        }
      }
  
      &__summary {
        font-size: 0.8rem;

        @media ${mediaQueries.md_up} {
          font-size: ${props => props.theme.fontSizes[5]};
        }
      }
    }
  }
`
