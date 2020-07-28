import styled from "styled-components"
import { Grid, Container } from "@material-ui/core"
import { PrimaryButton } from "../../components/buttons"
import ReactMarkdown from "react-markdown"
import Link from 'next/link';
import { mediaQueries } from '../../media_queries'

const TwoColumn = ({ data, className }) => {
  let customClassNames = data.classNames;

	return (
		<section className={`${className} ${customClassNames}`}>
			<Container maxWidth={data.contentWidth}>
				<Grid container >
					<Grid item xs={12} sm={data.asymmetric ? 4 : 6}>
						<div className='column-1 excerpt'>
							<ReactMarkdown source={data.column_1} />
              {data.linkButton 
                ? <Link href={data.linkButton}><a><PrimaryButton /></a></Link>
                : null}
						</div>
					</Grid>
					<Grid item xs sm={data.asymmetric ? 8 : 6}>
						<div className='column-2'>
							<ReactMarkdown source={data.column_2} />
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default styled(TwoColumn)`
  padding-top: ${props => props.theme.spacing[2]};
  padding-bottom: ${props => props.theme.spacing[2]};

  @media ${mediaQueries.md_up} {
    padding-top: ${props => props.theme.spacing[5]};
    padding-bottom: ${props => props.theme.spacing[5]};
  }
  
  &.index__services {
    .column-1 {
      position: sticky;
      top: 100px;
  
      .btn-wrapper {
        margin: ${props => props.theme.spacing[4]} 0;
      }
    }

    .column-2 {
      font-family: ${props => props.theme.fontFamily.excerpts};
      p { 
        font-size: ${props => props.theme.fontSizes[5]};
      }
    }

    .column-1,
    .column-2 *:not(p):not(img) {
      max-width: 480px;
    }

    blockquote {
      margin: ${props => props.theme.spacing[4]} 0;
    }

    ul {
      padding-left: 0;

      li {
        margin-top: ${props => props.theme.spacing[5]};
        list-style-type: none;
        position: relative;
        padding-left: 40px;

        &::before {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0.25rem;
          left: 0;
          border: 4px solid ${props => (
            props.color
              ? props.color
              : '#E1E642'
          )};
          border-radius: 100px;
          transform: translateY(-0.25rem);
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0.9rem;
          left: 9px;
          width: 10px;
          height: 10px;
          transform: translateY(-0.25rem);
          background: ${props => (
            props.color
              ? props.color
              : 'black'
          )};
          border-radius: 100px;
        }
      }
    }
  }

  &.about__text {
    .column-1 {
      img {
        width: 20px;
        margin-left: 10px;
      }

      text-align: center;

      @media ${mediaQueries.md_up} {
        text-align: left;
      }
    }

    .column-2 {
      margin-top: 1rem;

      p {
        font-size: ${props => props.theme.fontSizes[4]};

        &:not(:last-of-type) {
          margin-bottom: ${props => props.theme.spacing[5]}
        }
      }
    }
  }
`
