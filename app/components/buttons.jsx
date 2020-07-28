import styled from 'styled-components';

const UnstyledMenuButton = props => {
  return (
    <div 
      onClick={props.onClick} 
      className={`${props.className} btn-menu`}>
      <div>
        <span></span>
        <span></span>
      </div>
      {!props.isOpen && <div className="btn-menu__text">Menu</div>}
    </div>
  )
}

export const MenuButton = styled(UnstyledMenuButton)`
  position: relative;
  width: 30px;
  cursor: pointer;

  .btn-menu__text {
    position: absolute;
    font-size: 0.9rem;
    font-family: ${props => props.theme.fontFamily.excerpts};
    text-transform: uppercase;
  }
  
  & span {
    height: 3px;
    background: black;
    width: 100%;
    display: block;
    transition: all 0.3s;

    &:nth-child(1) {
      top: 0;
      ${props => (
        props.isOpen 
          ? 'transform: rotate(45deg); background: white;' 
          : '' 
      )}
    }

    &:nth-child(2) {
      margin-top: 5px;
      ${props => (
        props.isOpen 
        ? 'transform: rotate(-45deg); background: white; margin-top: -3px' 
          : '' 
      )}
    }
  }
`

const UnstyledPrimaryButton = (props) => {
  return (
    <div className={`btn-wrapper ${props.className}`}>
      <div onClick={props.onClick} className="btn__primary">
        <span></span>
        <span></span>
      </div>
      {props.btnText && <div className="btn__text">{props.btnText}</div>}
    </div>
  )
}

export const PrimaryButton = styled(UnstyledPrimaryButton)`
  position: relative;

  & .btn__primary {
    position: relative;
    width: 46px;
    height: 46px;
  }

  & .btn__text {
    position: absolute;
    font-size: 0.9rem;
    font-family: ${props => props.theme.fontFamily.excerpts};
    text-transform: uppercase;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0.5rem;
  }

  & span {
    position: absolute;
    border-radius: 100px;

    &:nth-child(1) {
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      background: ${props => (
        props.color
          ? props.color
          : 'black'
      )};
    }

    &:nth-child(2){
      left: 0;
      width: 100%;
      height: 100%;
      border: 4px solid ${props => (
        props.color
          ? props.color
          : '#E1E642'
      )};
    }  
  }
`

const SecondaryButton = () => {
  return (
    <button>
      Close
    </button>
  )
}
