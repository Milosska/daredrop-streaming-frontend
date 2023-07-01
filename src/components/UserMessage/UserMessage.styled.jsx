import styled from 'styled-components';

export const StyledMessage = styled.p`
  padding: 20px;
  font-family: 'MontserratBold';
  font-size: 22px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 50px;
    font-size: 28px;
  }

  @media screen and (min-width: 1200px) {
    padding: 100px;
    font-size: 34px;
  }
`;
