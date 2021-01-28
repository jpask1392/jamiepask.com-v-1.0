import styled from "styled-components"
import { Grid, Container } from '@material-ui/core';
import MoreProjectsCard from '../../moreProjectsCard'

const RelatedProjects = ({className, data, currentProject}) => {

  // relatedProjects Array to build
  const relatedProjects = [];
  // get current project index
  const currentIndex = data.findIndex(currentValue => currentValue.id === currentProject)
  
  // get previous project if it exists
  data[currentIndex - 1]
    ? relatedProjects.push(data[currentIndex - 1])
    : relatedProjects.push(data[currentIndex + 3])

  // // if we are on the last item in array
  if (currentIndex === data.length - 1) {
    relatedProjects.push(data[0])
    relatedProjects.push(data[1]) // push first item

  } else {
    // get next project if it exists
    data[currentIndex + 1]
    ? relatedProjects.push(data[currentIndex + 1])
    : relatedProjects.push(data[0]) // push first item

    // get next next project if it exists
    data[currentIndex + 2]
      ? relatedProjects.push(data[currentIndex + 2])
      : relatedProjects.push(data[0]) // push first item
  }

  return (
    <>
    {relatedProjects.map((project) => (
      <Grid item md={4} key={project.id}>
        <MoreProjectsCard data={project}/>
      </Grid>
    ))}
    </>
  )
}

export default styled(RelatedProjects)`
`