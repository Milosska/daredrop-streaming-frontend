import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;

  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 37.5px;

  font-family: 'MontserratMedium', sans-serif;
  color: ${props => props.theme.textColors.mainText};

  &.active {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    box-shadow: 0px 0px 49px -2px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.commonColors.contrastText};
  }
`;
