import styled from 'styled-components';

export const StyledBtn = styled.button`
  position: relative;

  display: inline-block;
  padding: 8px 20px;
  margin: 20px auto 0;

  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.commonColors.accentElemBg};
  border-radius: 37.5px;

  font-family: 'MontserratMedium', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.textColors.mainText};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    color: ${({ theme }) => theme.commonColors.contrastText};
  }

  @media screen and (min-width: 768px) {
    padding: 8px 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
