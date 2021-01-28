import styled from 'styled-components';
import Panel from './panel';
import { Grid, Container } from "@material-ui/core";

export const Tabs = styled(props => {
  /**
   * Will want to allow this to be set by props
   */
  const [activeTab, setActiveTab] = React.useState(0); // default selected tab

  // update state index on clicked element
  const handleClick = (index) => {
    setActiveTab(index)
  }

  return (
    
    <Grid className={props.className} container spacing={5}>
      <Grid item xs md={6}>
        <ul>
        {props.children.map((item, index) => (
          <li key={item.key} onClick={() => handleClick(index)}>
            <h3 className={`tab ${index === activeTab && 'tab--active'}`}>
              {item.props.label}
            </h3>
          </li>
        ))}
        </ul>
      </Grid>

      <Grid item xs md={6}>
        <div>
          {props.children[activeTab]}
        </div>
      </Grid>
    </Grid>
  )
})`

.tab {
  cursor: pointer;

  &--active {
    color: green;  
  }
}

ul {
  padding: 0;
  list-style-type: none;

  li {
    padding-bottom: 0.5rem;
  }
}

`

// export dependencies
export { Panel };