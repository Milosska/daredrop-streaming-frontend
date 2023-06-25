import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColors.mainBg};
  color: ${({ theme }) => theme.textColors.mainText};
`;
