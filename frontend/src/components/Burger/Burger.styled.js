import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  padding-left: ${({ open }) => open ? '60px' : '0px'};


  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px; 
  }
  .span1 {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  .span2 {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
  }

  .span3 {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;
