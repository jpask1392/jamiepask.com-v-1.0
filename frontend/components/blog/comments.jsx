import { useState } from 'react';
import styled from 'styled-components'

const Comments = ({className}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => (
    setOpen(true) && setOpen(false)
  )

  return (
    <div className={className}>
      {!open 
        ? <div>Comments</div>
        : (
          <div>No</div>
        )}
    </div>
  )
}

export default styled(Comments)`

`
