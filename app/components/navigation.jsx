import {
  Modal
} from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { MenuButton } from './buttons';
import Link from 'next/link';
import { mediaQueries } from '../media_queries'

const Navigation = (props) => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    {link: '/blog', text: 'Blog'},
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
    <div>
      <MenuButton 
        onClick={open ? handleClose : handleOpen} 
        isOpen={open} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={props.className}
      >
        <div className="modal-body">
          <ul className="nav-list">
            {menuItems.map((item, i) => (
              <li 
                key={i} 
                className="nav-item"
                style={{"--animation-order": i}}>
                <Link href={item.link}><a>{item.text}</a></Link>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
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
  & .modal-body {
    height: 100%;
    background: #1C1C1C;

    & ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: flex-end;
      list-style-type: none;
      padding: 10rem ${props => props.theme.spacing[3]};

      @media ${mediaQueries.md_up} {
        padding: 10rem ${props => props.theme.spacing[5]};
      }

      li.nav-item {
        position: relative;
        font-weight: ${props => props.theme.fontWeights.heading};
        font-size: 5rem;
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