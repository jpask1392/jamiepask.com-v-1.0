import styled from "styled-components"
import { Image } from "cloudinary-react"
import { PrimaryButton } from "../components/buttons"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'

const ArticleCard = ({ className, data, type }) => {
	return (
		<article className={`${className}`}>
      <div className="image-wrapper">
	  		{data.featuredImage && (
          <Image
            cloudName='djetpo84s'
            publicId={data.featuredImage.id}
            width='100%'
          />
        )}
      </div>
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
        <Link href={`/${type}/[slug]`} as={`/${type}/${data.slug}`}>
          <a><PrimaryButton /></a>
        </Link>
      </div>
		</article>
	)
}

export default styled(ArticleCard)`
	background: white;
  box-shadow: ${props => props.theme.boxShadow};
  height: 100%;
  overflow: hidden;
  border-radius: 20px;

  .image-wrapper {
    height: 200px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  & .article-card__content {
    padding: ${props => props.theme.spacing[3]};

    .card-title {
      padding: ${props => props.theme.spacing[2]} 0;

      .link {
        font-weight: ${props => props.theme.fontWeights.heading};
        text-decoration: none;
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
