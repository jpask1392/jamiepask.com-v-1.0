import styled from 'styled-components';
import { ButtonArrow } from './common/icons'

const SecondaryButton = () => {
  return (
    <button>
      Close
    </button>
  )
}

export const PrimaryButton = styled(props => (
  <a onClick={props.onClick} className={`${props.className} btn${props.onDark ? ' btn--on-dark' : ''}`}>
    <div className="track">
      <div className="arrow arrow--hidden"><ButtonArrow/></div>
        <div className="btn__text">{props.children}</div>
      <div className="arrow"><ButtonArrow/></div>
    </div>
  </a>
))`
  background: transparent;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 18px;
  line-height: 1;
  display: inline-flex;
  align-content: center;
  border: 1px solid #272727;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;

  .track {
    display: flex;
    position: relative;
    transition: all 0.3s;
  }

  .arrow {
    svg {
      fill: #272727;
    }

    &--hidden {
      transition: all 1s;
      position: absolute;
      right: calc(100% + 40px);
    }
  }

  &:hover .track {
    transform: translateX(calc(100% - 80px));
  }

  .btn__text {
    padding-right: 40px;
    color: #272727;
    letter-spacing: 0.07em;
  }

  &.btn--on-dark {
    background: transparent;
    border: 1px solid white;

    .btn__text {
      color: white;
    }

    svg {
      fill: white;
    }
  }
`