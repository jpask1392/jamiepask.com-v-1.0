import styled from "styled-components"
import { Image } from "cloudinary-react"
import { PrimaryButton } from "../components/buttons"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'

const MoreProjectsCard = ({ className, data }) => {
  const type = "projects";
  const excerpt_length = 120;

  let excerpt;
  if (data.excerpt) {
    excerpt = data.excerpt;
  } else {
    excerpt = data.overview.substring(0, excerpt_length);
    excerpt = (data.overview.length > excerpt_length) 
      ? excerpt.concat('...') 
      : excerpt;
  }
  
	return (
		<article className={`${className}`}>
      <div className="image-wrapper">
	  		{data.thumbnailImage && (
          <Image
            cloudName='djetpo84s'
            publicId={data.thumbnailImage.id}
            width='100%'
          />
        )}
      </div>
      <div className="article-card__content">
        <div className="categories excerpt">
          {data.tags.map((tag) => <span>{tag.name}</span>)}
        </div>
			  <h4 class="card-title">
          <Link href={`/${type}/[slug]`} as={`/${type}/${data.slug}`}>
            <a class="link">{data.title}</a>
          </Link>
        </h4>
        <div className="excerpt">
          <ReactMarkdown source={excerpt} />
        </div>
        <Link href={`/${type}/[slug]`} as={`/${type}/${data.slug}`}>
          <a><PrimaryButton /></a>
        </Link>
      </div>
		</article>
	)
}

export default styled(MoreProjectsCard)`
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
