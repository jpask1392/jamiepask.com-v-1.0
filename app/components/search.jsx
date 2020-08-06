import {
  Modal,
  Grid, 
  Container,
  CircularProgress
} from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';
import { SearchIcon } from './icons';
import { search } from '../graphql/search'
import { server } from '../config'

const Search = ({className}) => {

  // hold state and state update function
  const [searchResults, setSearchResults] = React.useState({allPosts: [], allProjects: []});
  const [isLoading, setLoading] = React.useState(false);

  // Handle opening and closing of modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // Handle chaning the input value
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = e => setSearchTerm(e.target.value);

  /** 
   * Effect will trigger when its dependency changes
   * In this case the dependency is searchTerm
   */
  React.useEffect(() => {
    if (searchTerm.length > 0) {
      (async () => {
        setLoading(true);
        // query database here
        const res = await fetch(`${ server }/admin/api`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({query: search(searchTerm)}),
        });
        const results = await res.json();
        setLoading(false);
        setSearchResults(results.data);
      })()
    } else {
      setSearchResults({allPosts: [], allProjects: []});
    }
  }, [searchTerm]);

  return (
    <div className={className}>
      <div 
        className="search-icon"
        onClick={open ? handleClose : handleOpen} 
        isopen={`${open}`}>
          <SearchIcon />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={className}
        BackdropProps={{className: "modal-backdrop"}}
        disableBackdropClick={true}>
        <Container>
          <Grid container>
            <Grid item xs>
              <div className="modal-body">
                <form>
                  <input 
                    type="text" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </form>
                {isLoading 
                  ? <div className="loading"><CircularProgress /></div> 
                  : <div>
                      <ul>
                        {searchResults.allPosts.map((result, index) => {
                          return <li key={index}><Link href={`/blog/${result.slug}`}><a>{result.title}</a></Link></li>
                        })}
                        {searchResults.allProjects.map((result, index) => {
                          return <li key={index}><Link href={`/projects/${result.slug}`}><a>{result.title}</a></Link></li>
                        })}
                      </ul>
                    </div>
                }
              </div>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </div>
  );
}

export default styled(Search)`
  & .search-icon {
    cursor: pointer;
  }

  & .MuiContainer-root:focus {
    outline: none;
  }
  
  & .modal-backdrop {
    background-color: white !important;
  }

  & .modal-body {
    margin-top: 100px;

    &:focus {
      outline: none;
    }

    .loading {
      padding: 10rem;
      text-align: center;
    }

    input {
      width: 100%;
      padding: 2rem 0;
      border: none;
      border-bottom: 1px solid black;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: ${props => props.theme.fontWeights.heading};

      &:focus {
        outline: none;
      }
    }
  }

`