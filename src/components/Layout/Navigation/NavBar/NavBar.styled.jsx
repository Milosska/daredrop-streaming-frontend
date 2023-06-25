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
  width: 65px;
  height: 65px;
`;
