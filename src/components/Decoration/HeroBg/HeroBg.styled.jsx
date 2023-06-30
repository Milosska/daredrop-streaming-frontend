import styled from 'styled-components';

const setBgImage = (theme, img) => {
  return `linear-gradient(
      180deg,
      ${theme.bgColors.overlayBg} 0%,
     ${theme.bgColors.overlayBg} 61.48%
    ),
    url(${img})`;
};

const setBigBgImage = (theme, img) => {
  return `linear-gradient(
      180deg,
      ${theme.bgColors.overlayBg} 0%,
     ${theme.bgColors.overlayBg} 61.48%
    ),
    url(${img})`;
};

export const HeroHeaderBg = styled.div`
  position: absolute;
  top: -100px;
  left: -10%;
  z-index: -1;
  width: 120%;
  height: 700px;

  background-color: #f18585;
  background-image: ${prop => setBgImage(prop.theme, prop.image)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${prop => setBigBgImage(prop.theme, prop.bigimage)};
  }

  @media screen and (min-width: 768px) {
    height: 700px;
  }
`;
