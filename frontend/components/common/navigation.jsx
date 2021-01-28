import {
  Modal
} from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { mediaQueries } from '../../media_queries'
import Search from '../../components/common/search';

const Navigation = (props) => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    // {link: '/blog', text: 'Blog'},
    {link: '/projects', text: 'Work'},
    {link: '/about', text: 'About'},
    {link: '/contact', text: 'Contact'},
  ]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className={props.className}>

      <ul className="nav-list">
        {menuItems.map((item, i) => (
          <li 
            key={i} 
            className="nav-item"
            style={{"--animation-order": i}}>
            <Link href={item.link}><a className="nav-link">{item.text}</a></Link>
          </li>
        ))}
        <li><Search /></li>
      </ul>
        
    </nav>
  );
}

const slideLeft = keyframes`
  from {
    left: -50px;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
`;

export default styled(Navigation)`
  padding: 1rem 1.5rem;
  background: ${props => props.theme.color.primaryLight};
  border-radius: 8px;
  display: block;
  box-shadow:${props => props.theme.boxShadow};

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      line-height: 1;
    }
  }

  li:not(:last-of-type) {
    margin-right: ${props => props.theme.spacing[2]};
  }

  a.nav-link {
    font-weight: 700;
    text-decoration: none;
    color: white;
    font-size: 14px;
  }

  .search-icon {
    height: 0.8rem;
    width: 0.8rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }


  & .modal-body {
    height: 100%;
    background: #1C1C1C;

    & ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      padding: 10rem ${props => props.theme.spacing[3]};

      @media ${mediaQueries.md_up} {
        padding: 10rem ${props => props.theme.spacing[5]};
        align-items: flex-end;
        justify-content: flex-start;
      }

      li.nav-item {
        position: relative;
        font-weight: ${props => props.theme.fontWeights.heading};
        font-size: 3rem;
        line-height: 1;
        margin-bottom: 1rem;
        animation-name: ${slideLeft};
        animation-duration: 300ms;
        animation-delay: calc(var(--animation-order) * 100ms);
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.42,0,0.58,1);
        transition: all 0.3s;

        @media ${mediaQueries.md_up} {
          font-size: 6.25rem;
        }
      }

      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }
  }
`