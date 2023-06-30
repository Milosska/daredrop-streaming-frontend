import PropTypes from 'prop-types';
import { platformOptionsData } from 'assets/data/SelectPlatformOptionData';

import {
  Container,
  StyledLabel,
  StyledLogo,
  StyledText,
} from './PlatformOptions.styled';

const OptionLabel = ({ platformName, imgURL, description }) => {
  return (
    <Container>
      <StyledLogo src={imgURL} alt={`${platformName} logo`} />
      <StyledLabel>{platformName}</StyledLabel>
      <StyledText>{description}</StyledText>
    </Container>
  );
};

export const platformOptions = platformOptionsData.map(
  ({ platform, imgURL, description }) => {
    return {
      value: platform.toLowerCase(),
      label: (
        <OptionLabel
          platformName={platform}
          imgURL={imgURL}
          description={description}
        />
      ),
    };
  }
);

OptionLabel.propTypes = {
  platformName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
