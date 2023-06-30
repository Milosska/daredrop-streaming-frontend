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
  margin-bottom: 10px;

  color: ${({ theme }) => theme.textColors.accentText};
  font-family: 'MontserratBold';
  font-size: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 36px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 42px;
  }
`;

export const GeneralThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-family: 'MontserratMedium';
  font-size: 14px;
  line-height: 1.32;

  @media screen and (min-width: 768px) {
    display: grid;
    row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 3fr;

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
  row-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
`;

export const RatingNumber = styled.p`
  height: 20px;
  padding-left: 15px;
  align-self: center;

  font-size: 16px;

  border-left: 2px solid ${({ theme }) => theme.textColors.mainText};

  @media screen and (min-width: 768px) {
    height: 25px;
    font-size: 22px;
  }
`;

export const GenreThumb = styled.div`
  display: flex;
  max-height: 25px;
  margin: 0 20px 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: start;
    max-height: auto;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 10px;
    align-items: start;
    margin: 0;
  }
`;

export const PlatformThumb = styled(GenreThumb)`
  margin: 0 auto 0 20px;
`;

export const ParameterLable = styled.span`
  display: none;
  margin-right: 10px;

  color: ${({ theme }) => theme.textColors.mainText};
  font-family: 'MontserratBold';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: inline-block;
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

  width: 320px;
  height: 380px;
  background-color: ${({ theme }) => theme.textColors.accentText};

  border-radius: 35%;
  border-style: solid;
  border-width: 10px 20px;
  border-color: ${({ theme }) => theme.textColors.accentText};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 420px;
  }

  @media screen and (min-width: 1200px) {
    width: 450px;
    height: 550px;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;
