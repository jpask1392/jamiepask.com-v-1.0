import styled from 'styled-components';
import Navigation from './navigation';
import Link from 'next/link';
import { mediaQueries } from '../../media_queries'

// Define component
const Header = (props) => {
  const [, setScrollPosition] = React.useState(0);
  const [shouldHideHeader, setShouldHideHeader] = React.useState(false);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    // state
    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > 80;

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, 400);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleDocumentScroll);
    
    return () =>
      window.removeEventListener('scroll', handleDocumentScroll);
  }, []);
  
  return (
    <div className={`${props.className} header ${shouldHideHeader ? 'header--hide': 'header--show'}`}>
      <div className="header__logo">
      <Link href="/">
        <a className="link">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 28 37">
              <g transform="translate(-322.154 -60)"><rect width="10" height="9" transform="translate(322.154 60)"/><rect width="10" height="9" transform="translate(322.154 79)"/><rect width="9" height="18" transform="translate(341.154 79)"/></g>
          </svg>
        </a>
      </Link>
      </div>
      <Navigation />
    </div>
)};

// Style component
export default styled(Header)`
  position: fixed;
  z-index: 1400;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 0 ${props => props.theme.spacing[3]};
  margin-top: 25px;

  @media ${ mediaQueries.md_up } {
    padding: 0 ${props => props.theme.spacing[4]};
  }

  .link {
    display: block;
    width: 20px;
    height: 20px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &.header {
    transition: transform 1s, opacity 0.3s;

    &--show {
      opacity: 1;
      transform: translateY(0);
      transition: transform 0.3s, opacity 1s;
    }

    &--hide {
      opacity: 0;
      transform: translateY(-100%);
    }

    &__logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      height: 100%;
  
      a {
        height: 30px;
  
        svg {
          height: 100%;
        }
      }
    }
  }
`
