import styled from 'styled-components';
import * as tvImage from 'assets/images/not_found-min.png';
import * as bigTvImage from 'assets/images/not_found@2x-min.png';

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 40px 0;
  }
`;

export const ImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  margin: 0 auto;

  background-image: url(${tvImage.default});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bigTvImage.default});
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 40px;
  }
`;

export const ErrorCodeText = styled.p`
  color: ${({ theme }) => theme.commonColors.errorCodeText};
  font-family: 'MontserratBold';
  font-size: 62px;
  line-height: 1.22;

  @media screen and (min-width: 768px) {
    font-size: 82px;
  }
`;

export const TextThumb = styled.div`
  padding: 20px;
  border-left: 2px solid ${({ theme }) => theme.commonColors.socialsBg};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 40px 60px;
    text-align: start;
  }
`;

export const Header = styled.p`
  margin-bottom: 10px;
  font-family: 'MontserratBold';
  font-size: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 10px;
  font-family: 'MontserratMedium';
  font-size: 18px;
  line-height: 1.32;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
