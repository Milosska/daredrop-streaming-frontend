import { platformOptionsData } from 'assets/data/SelectPlatformOptionData';
import { Container, StyledImg, StyledLabel } from './PlatformBadge.styled';

export const PlatformBadge = ({ platform, height }) => {
  const currentPlatformData = platformOptionsData.find(
    platformData => platformData.platform.toLowerCase() === platform
  );

  return (
    <>
      {currentPlatformData && (
        <Container height={height}>
          <StyledImg
            src={currentPlatformData?.imgURL}
            alt={currentPlatformData?.platform}
          />
          <StyledLabel>{currentPlatformData.platform}</StyledLabel>
        </Container>
      )}
    </>
  );
};
