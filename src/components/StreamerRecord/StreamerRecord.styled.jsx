import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px;
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 10px;
  font-family: 'MontserratMedium';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 20px;

  color: ${({ theme }) => theme.textColors.accentText};
  font-family: 'MontserratBold';
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 42px;
  }
`;

export const GeneralThumb = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 3fr;

  font-family: 'MontserratMedium';
  font-size: 14px;
  line-height: 1.32;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const StreamerInfoThumb = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
`;

export const RatingNumber = styled.p`
  height: 25px;
  padding-left: 15px;
  align-self: center;

  font-size: 22px;

  border-left: 2px solid ${({ theme }) => theme.textColors.mainText};
`;

export const PlatformThumb = styled.div`
  display: flex;
`;

export const ParameterLable = styled.span`
  margin-right: 10px;

  color: ${({ theme }) => theme.textColors.mainText};
  font-family: 'MontserratBold';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const StyledDescription = styled.p`
  text-align: justify;
`;

export const ImageThumb = styled.div`
  position: relative;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;

  width: 450px;
  height: 550px;
  background-color: ${({ theme }) => theme.textColors.accentText};

  border-radius: 35%;
  border-style: solid;
  border-width: 10px 20px;
  border-color: ${({ theme }) => theme.textColors.accentText};
  overflow: hidden;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;
