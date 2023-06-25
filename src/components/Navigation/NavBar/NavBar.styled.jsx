import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 0 40px;

  font-size: 18px;
  color: ${({ theme }) => theme.textColors.mainText};
`;

export const StyledImage = styled.img`
  width: 55px;
  height: 55px;
`;
