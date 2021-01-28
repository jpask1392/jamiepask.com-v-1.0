import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { mediaQueries } from '../../media_queries'


const ContactInputTextUnstyled = props => {
  const [input, setInput] = React.useState('');
  const [width, setWidth] = React.useState(false);
  const inputRef = React.useRef();
  const placeholderRef = React.useRef();

  React.useEffect(() => {
    /**
     * clientWidth returns incorrect width 
     * on dom. May be an issue with paint order.
     * 
     * Timeout is a temp fix for the issue
     */
    setTimeout(() => {
      requestAnimationFrame(() => {
        setWidth(placeholderRef.current.clientWidth + 20);
      })
    }, 100)
  }, []);
  

  // Handle chaning the input value
  const handleChange = e => {
    setInput(e.target.value);

    // listen to and perform update on these events
    var event = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in event) {
      inputRef.current.addEventListener(event[i], () => {
        setWidth(placeholderRef.current.clientWidth + 20)
      }, false)
    }
  }

  return (
    <span className={props.className}>
      <span ref={placeholderRef}>{input ? input : props.placeholder }</span>
      <input 
        ref={inputRef}
        type="text" 
        style={{ width: width }}
        value={input}
        placeholder={props.placeholder}
        name={props.name}
        onChange={handleChange}
      />
    </span>
  )
}

export const ContactInputText = styled(ContactInputTextUnstyled)`
  position: relative;

  & span {
    position: absolute;
    visibility: hidden;
    font-weight: ${props => props.theme.fontWeights.heading};
    font-size: ${props => props.theme.fontSizes[4]};

    @media ${mediaQueries.md_up} {
      font-size: ${props => props.theme.fontSizes[2]};
    }
  }

  & input {
    text-align: center;
    transition: all 0.6s;
    border: none;
    border-bottom: 2px solid black;
    font-weight: ${props => props.theme.fontWeights.heading};
    font-family: ${props => props.theme.fontFamily.body};
    font-size: ${props => props.theme.fontSizes[4]};

    @media ${mediaQueries.md_up} {
      font-size: ${props => props.theme.fontSizes[2]};
    }

    &::placeholder {
      color: #B2B2B2;
      font-size: ${props => props.theme.fontSizes[4]};

      @media ${mediaQueries.md_up} {
        font-size: ${props => props.theme.fontSizes[2]};
      }
    }

    &:focus {
      outline: none;
    }
  }
`

export const ContactInputDropdownUnstyled = props => {
  const [input, setInput] = React.useState();

  const handleChange = e => {
    setInput(e.target.value);
  }

  return (
    <Select
      labelId="simple-select-label"
      id="simple-select"
      value={input || 10}
      onChange={handleChange}
      className={props.className}
    >
      <MenuItem value={10}>a web developer</MenuItem>
      <MenuItem value={20}>a web designer</MenuItem>
      <MenuItem value={30}>project quotes</MenuItem>
    </Select>
  )
}

export const ContactInputDropdown = styled(ContactInputDropdownUnstyled)`
  border-bottom: 2px solid black;
  font-size: ${props => props.theme.fontSizes[2]} !important;
  font-weight: ${props => props.theme.fontWeights.heading};
  padding-left: 2rem;
  padding-right: 2rem;
  color: grey;
`