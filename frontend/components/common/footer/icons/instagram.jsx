import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { InstagramIcon } from '../../icons';
// import { mediaQueries } from '../media_queries';

const Instagram = ({instagram, className}) => { 
  // const {
  //   header,
  //   cta_header,
  //   cta_link,
  //   cta_text,
  //   footer_text,
  // } = footerData;

  return (
    <div className={`${className} instagram`}>
      <div className="instagram__header">
        <span className="icon"><InstagramIcon/></span><span>@{ instagram.data[0].username }</span>
      </div>
      <div className="instagram__media">
        {instagram.data.map((image, i) => (
          <div className="instagram__item" key={i}>
            <a href="https://www.instagram.com/jamiepask92/" target="_blank">
            <div className="image">
              <img src={image.media_url} alt="" />
              <div className="hover">
                <span className="text">
                  <span className="icon"><InstagramIcon/></span>
                  {image.caption}
                </span>
              </div>
            </div>
            </a>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default styled(Instagram)`
  .instagram {
    &__media {
      display: flex;
      margin-bottom: ${props => props.theme.spacing[4]};
      overflow: hidden;
    }

    &__header {
      text-align: center;
      margin-bottom: ${props => props.theme.spacing[2]};
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 1rem;

        svg {
          width: 100%;
          height: 100%
        }
      }
    }

    &__item {
      position: relative;
      flex: 0 0 20%;
      overflow: hidden;

      .image {
        height: 0;
        padding-bottom: 100%;
        width: 100%;

        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: all 0.3s;
        }

        .hover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s;

          .text {
            margin-top: 50px;
            font-weight: 700;
            transition: all 0.3s;

            .icon {
              width: 20px;
              height: 20px;
              display: block;
              margin: auto;

              svg {
                fill: white;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .hover {
          opacity: 1;

          .text {
            margin-top: 0;
          }
        }
      }
    }
  }
`
