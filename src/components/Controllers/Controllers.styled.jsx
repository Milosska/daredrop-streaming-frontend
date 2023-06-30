import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const StyledBtn = styled.button`
  display: inline-block;
  padding: 8px 15px;

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

  &:disabled {
    background-color: ${({ theme }) => theme.commonColors.socialsBg};
    border: 3px solid ${({ theme }) => theme.commonColors.socialsBg};
    color: ${({ theme }) => theme.commonColors.disabledBtnText};
  }

  > svg {
    width: 22px;
    height: 22px;
  }
`;
