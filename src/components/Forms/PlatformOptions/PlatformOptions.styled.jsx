import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  column-gap: 5px;
  row-gap: 5px;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 3fr;

  width: 100%;
  height: 100px;
  padding: 5px 0;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`;

export const StyledLogo = styled.img`
  width: 22px;
  height: 22px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: end;
  justify-self: end;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1200px) {
    width: 42px;
    height: 42px;
  }
`;

export const StyledLabel = styled.p`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: start;

  font-family: 'MontserratBold';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const StyledText = styled.p`
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  font-family: 'MontserratRegular';
  font-size: 14px;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
