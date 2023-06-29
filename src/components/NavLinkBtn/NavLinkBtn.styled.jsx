import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 auto;

  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.commonColors.accentElemBg};
  border-radius: 37.5px;

  font-family: 'MontserratMedium', sans-serif;
  font-size: 1em;
  color: ${({ theme }) => theme.textColors.mainText};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    color: ${({ theme }) => theme.commonColors.contrastText};
  }
`;
