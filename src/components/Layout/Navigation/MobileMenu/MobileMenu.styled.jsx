import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentThumb = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto;
`;

export const ToggleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
    color: ${props => props.theme.textColors.mainText};
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 5px 20px;
  background-color: ${props => props.theme.bgColors.mainBg};
  animation: menuOpen 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes menuOpen {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;

  font-size: 22px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  font-family: 'MontserratMedium', sans-serif;
  color: ${props => props.theme.textColors.mainText};

  &.active {
    border-radius: 37.5px;
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    box-shadow: 0px 0px 49px -2px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.commonColors.contrastText};
  }
`;
