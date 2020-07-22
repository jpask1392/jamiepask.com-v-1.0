import styled from "styled-components"
import { Image } from "cloudinary-react"
import { PrimaryButton } from "../components/buttons"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import { Grid, Container } from "@material-ui/core"

const ArticleCardLarge = ({ className, data, type }) => {
	return (
		<article className={`${className}`}>
			{data.featuredImage && (
				<Image
					cloudName='djetpo84s'
					publicId={data.featuredImage.id}
					width='100%'
				/>
			)}
      <Grid container>
        <Grid item xs={7}>
          <div className="article-card__content">
            <div className="categories excerpt">
              {data.categories.map((cat) => <span>{cat.name}</span>)}
            </div>
            <h4 class="card-title">
              <Link href={`/${type}/[slug]`} as={`/${type}/${data.slug}`}>
                <a class="link">{data.title}</a>
              </Link>
            </h4>
            <div className="excerpt">
              <ReactMarkdown source={data.excerpt} />
            </div>
          </div>
        </Grid>
      </Grid>
		</article>
	)
}

export default styled(ArticleCardLarge)`
	background: white;
  height: 100%;
  overflow: hidden;
  
  & .article-card__content {
    padding: ${props => props.theme.spacing[3]} 0;

    .card-title {
      padding: ${props => props.theme.spacing[2]} 0;

      .link {
        font-weight: ${props => props.theme.fontWeights.heading};
      }
    }

    .excerpt:not(.categories) {
      padding-bottom: ${props => props.theme.spacing[2]};
    }

    .categories {
      color: #B2B2B2;

      span {
        position: relative;

        &:not(:first-of-type) {
          padding-left: ${props => props.theme.spacing[2]};
        }
        
        &:not(:last-of-type) {
          padding-right: ${props => props.theme.spacing[2]};
          &::after {
            content: "";
            position: absolute;
            right: -1px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #B2B2B2;
          }
        }
      }
    }
  }
`
