import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.bgColors.mainBg};
  color: ${({ theme }) => theme.textColors.mainText};
`;

export const Main = styled.main`
  flex: 1;
`;
