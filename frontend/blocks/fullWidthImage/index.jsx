import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { PrimaryButton } from '../../components/buttons';
import { mediaQueries } from '../../media_queries';
import Image from 'next/image';


const FullWidthImage = ({className, data}) => {
  // decontruct data object from props 
  const {
    image,
  } = data;
  
  return (
    <section className={className}>
      {
        image && (
          <Image
            src={`http://localhost:1337${image.url}`}
            alt="Picture of the author"
            layout="fill"
          />
        )
      }
    </section>
  )
};

export default styled(FullWidthImage)`
  position: relative;
  padding-bottom: 30%;

  img {
    object-fit: cover;
  }
`