import styled from 'styled-components';
import * as streamersBg from 'assets/images/main/streamers_bg-min.png';
import * as streamersBigBg from 'assets/images/main/streamers_bg@2x-min.png';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;

  height: 120px;
  padding: 0 40px;

  text-align: center;

  @media screen and (min-width: 768px) {
    height: 140px;
  }

  @media screen and (min-width: 1200px) {
    height: 180px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: 'MontserratMedium';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'MontserratBold';
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 42px;
  }
`;

export const FormSection = styled.section`
  padding: 20px 40px;
`;

export const FormSectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StreamersSection = styled.section`
  width: 100%;
  min-height: 800px;
  padding: 20px 40px;

  background-image: url(${streamersBg.default});
  background-repeat: no-repeat;
  background-size: 150% 700px;
  background-position: top 100px left 0;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${streamersBigBg.default});
  }

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const StreamersSectionTitle = styled.h2`
  font-family: 'MontserratBold';
  font-size: 34px;
`;

export const TitleAccent = styled.span`
  display: block;
  color: ${({ theme }) => theme.textColors.accentText};
`;
