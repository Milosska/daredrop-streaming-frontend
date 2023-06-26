import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: transparent;
  color: ${({ theme }) => theme.textColors.mainText};
`;

export const Main = styled.main`
  position: relative;
  flex: 1;
  min-height: 450px;

  @media screen and (min-width: 480px) {
    min-height: 400px;
  }

  @media screen and (min-width: 768px) {
    min-height: 350px;
  }
`;
