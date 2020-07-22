import styled from 'styled-components';
import Navigation from '../components/navigation';
import Link from 'next/link';
import Search from '../components/search';
import { mediaQueries } from '../media_queries'

// Define component
const Header = (props) => {
  return (
    <div className={props.className}>
      <Search />
      <div className="header__logo">
      <Link href="/"><a><svg xmlns="http://www.w3.org/2000/svg" width="28" height="37" viewBox="0 0 28 37"><g transform="translate(-322.154 -60)"><rect width="10" height="9" transform="translate(322.154 60)"/><rect width="10" height="9" transform="translate(322.154 79)"/><rect width="9" height="18" transform="translate(341.154 79)"/></g></svg></a></Link>
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
  height: 100px;
  box-sizing: border-box;
  padding: 0 ${props => props.theme.spacing[3]};

  @media ${ mediaQueries.md_up } {
    padding: 0 ${props => props.theme.spacing[5]};
  }

  & .header__logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`
