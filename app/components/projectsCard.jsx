import { Image } from "cloudinary-react"
import styled from 'styled-components'
import Link from 'next/link';

const ProjectCard = ({project, className}) => (

    <div className={`${className} project-card`}>
      <Link href={`projects/${project.slug}`}><a>
        <div className="project-card__image">
          {project.thumbnailImage && (
            <Image
              cloudName='djetpo84s'
              publicId={project.thumbnailImage.id}
              width='100%'
            />
          )}
        </div>
      </a></Link>
      <div className="project-card__text">
        <div>
        {project.tags.map((tag, i) => (
          <span key={i} className="excerpt">{tag.name}</span>
        ))}
        </div>
        <h4>{project.title}</h4>
      </div>
    </div>
)

export default styled(ProjectCard)`    

    & .project-card__text {
      margin-top: ${props => props.theme.spacing[2]};

      span {
        color: grey;

        &:not(:last-of-type) {
          margin-right: 1rem;
        }
      }
    }

`