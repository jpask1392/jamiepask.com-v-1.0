import Image from 'next/image';
import styled from 'styled-components'
import Link from 'next/link';
import { H1, H2, H3, P } from '../components/typography';
import { EarthIcon } from '../components/icons';

const ProjectCard = ({project, className}) => (

    <div className={`${className} project-card`} data-project-id={project.id}>
      <Link href={`projects/${project.slug}`}><a>
        <div className="project-card__image">
          {project.card_project_image && (
            <Image
              src={`http://localhost:1337${project.card_project_image.url}`}
              alt="Picture of the author"
              layout="fill"
            />
          )}
        </div>
      </a></Link>
      <div className="project-card__text">
        <svg className="wavy-top" xmlns="http://www.w3.org/2000/svg" width="663.583" height="55.471" viewBox="0 0 663.583 55.471"><path d="M663.583,55.471H0V24.832c.034.016,3.5,1.8,9.67,4.424,5.687,2.422,14.894,6.077,26.456,9.734a314.375,314.375,0,0,0,39.418,9.734A277.3,277.3,0,0,0,124.1,53.149h.155c28.694-.017,54.162-6.418,81.125-13.195,14.716-3.7,29.932-7.523,46.176-10.4,8.768-1.554,17.036-2.7,25.275-3.495,9.284-.9,18.264-1.335,27.454-1.335,2.614,0,5.27.037,7.893.11.881,0,1.764,0,2.625,0,23.244,0,42.008-1.015,59.051-3.194,15.2-1.943,27.158-4.571,39.815-7.353,13.823-3.038,28.117-6.18,48.163-8.8C484.612,2.515,511.4.719,543.73,0a347.9,347.9,0,0,1,47.4,4.7,373.128,373.128,0,0,1,38.013,8.445,281.646,281.646,0,0,1,34.435,11.686V55.47h0Z" fill="#fff"/></svg>
        <H3 className="header">{project.name}</H3>
        <div className="categories">
        {project.tags.map((tag, i) => (
          <span key={i} className="categories__item">
            {tag.name}{project.tags.length - 1 != i && ', '}
          </span>
        ))}
        </div>
        <a className="site-link" href={project.site_link} target="_blank">
          <span className="icon"><EarthIcon /></span>{project.site_link}
        </a>
      </div>
    </div>
)

export default styled(ProjectCard)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .project-card__image {
    height: 0;
    padding-bottom: 110%;
    position: relative;

    img {
      object-fit: cover;
    }
  }

  .project-card__text {
    background: white;
    padding: 2.5rem;
    position: relative;

    .header {
      text-transform: lowercase;
      margin-bottom: 0.25rem;
    }

    .categories {
      padding-bottom: 2rem;

      &__item {
        color: #393939;
        text-transform: uppercase;
        font-size: 0.8rem;
      }
    }

    svg.wavy-top {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 100%;
      height: auto;
    }

    .site-link {
      font-size: 0.9rem;
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .icon {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      display: flex;
    }
  }
`