import styled from 'styled-components';
import * as heroBg from 'assets/images/main/hero-min.jpg';
import * as bigHeroBg from 'assets/images/main/hero@2x-min.jpg';

const setBgImage = theme => {
  return `linear-gradient(
      180deg,
      ${theme.bgColors.overlayBg} 0%,
     ${theme.bgColors.overlayBg} 61.48%
    ),
    url(${heroBg.default})`;
};

const setBigBgImage = theme => {
  return theme === '/register'
    ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.7) 61.48%
    ),
    url(${bigHeroBg.default})`
    : `linear-gradient(
      180deg,
      rgba(48, 48, 48, 0.5) 0%,
      rgba(48, 48, 48, 0.7) 61.48%
    ), url(${bigHeroBg.default})`;
};

export const HeroHeaderBg = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  z-index: -1;
  width: 120%;
  height: 450px;

  background-color: #f18585;
  background-image: ${prop => setBgImage(prop.theme)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${prop => setBigBgImage(prop.theme)};
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;

  height: 180px;
  text-align: center;
`;

export const HeroSubtitle = styled.p`
  font-family: 'MontserratMedium';
  font-size: 18px;
`;

export const HeroTitle = styled.h2`
  font-family: 'MontserratBold';
  font-size: 38px;
`;
