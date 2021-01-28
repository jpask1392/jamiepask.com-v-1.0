import styled from 'styled-components';
import { H1, H2, H3 } from '../typography'

const HeaderSplitter = ({className, header, tag}) => {
  const tags = {
    "h1": ({className, children}) => <H1 className={className}>{children}</H1>,
    "h2": ({className, children}) => <H2 className={className}>{children}</H2>,
    "h3": ({className, children}) => <H3 className={className}>{children}</H3>,
  }

  const Tag = tags[tag];

  return (
    <div className={`header-splitter ${className}`}>
      <Tag className="header">
        {header}
      </Tag>
    </div>
  )
}

export default styled(HeaderSplitter)`
  width: 100%;
  text-align: center;
  z-index: 1;
  position: relative;

  .header {
    background-color: inherit;
    margin-bottom: ${props => props.theme.spacing[2]};
    display: inline-block;
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;

    &::before {
      content: "";
      height: 1px;
      background: #BBBBBB;
      position: absolute;
      width: 100vw;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
`