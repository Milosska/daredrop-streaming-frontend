import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0 0;
  padding: 20px;

  background-color: ${({ theme }) => theme.bgColors.filterMenuBg};
  border-radius: 22px;

  > button {
    @media screen and (min-width: 768px) {
      left: 90%;
    }
  }
`;

export const FiltersTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'MontserratBold';
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const FiltersThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-top: 10px;

  font-family: 'MontserratMedium';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
