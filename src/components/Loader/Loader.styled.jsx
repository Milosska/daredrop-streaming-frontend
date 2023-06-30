import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const LoaderThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 200px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bgColors.mainBg};
  background-color: ${({ theme }) => theme.commonColors.accentElemBg};
`;
