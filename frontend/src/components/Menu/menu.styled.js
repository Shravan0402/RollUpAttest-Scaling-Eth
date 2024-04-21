import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(255,255,255);
  transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
 height:100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0; 
  right: -22.5vw; 
  transition: transform 0.3s ease-in-out;
  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: '#0D0C1D';
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
