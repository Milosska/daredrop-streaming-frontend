import PropTypes from 'prop-types';

import { StaredRating } from 'components/Badges/Rating/StarRating';
import { GenreBadge } from 'components/Badges/GenreBadge/GenreBadge';
import { PlatformBadge } from '../Badges/PlatformBadge/PlatformBadge';
import {
  StyledSection,
  StyledSubtitle,
  StyledTitle,
  GeneralThumb,
  StreamerInfoThumb,
  GenreThumb,
  PlatformThumb,
  ParameterLable,
  StyledDescription,
  ImageThumb,
  StyledImage,
} from './StreamerRecord.styled';

export const StreamerRecord = ({
  streamer: { _id, name, photoURL, genre, platform, description, rating },
}) => {
  return (
    <>
      {_id && (
        <StyledSection>
          <StyledSubtitle>Dare Drop Streamer</StyledSubtitle>
          <StyledTitle>{name}</StyledTitle>
          <GeneralThumb>
            <StreamerInfoThumb>
              <StaredRating
                rating={rating}
                style={{ maxWidth: 180, justifySelf: 'end', marginRight: 15 }}
              />
              <GenreThumb>
                <ParameterLable>Genre:</ParameterLable>
                <GenreBadge genre={genre} />
              </GenreThumb>
              <PlatformThumb>
                <ParameterLable>Platform:</ParameterLable>
                <PlatformBadge platform={platform} height={25} />
              </PlatformThumb>
            </StreamerInfoThumb>
            <ImageThumb>
              <StyledImage src={photoURL} alt={name} />
            </ImageThumb>
            <StyledDescription>
              <ParameterLable>Activity description:</ParameterLable>
              {description}
            </StyledDescription>
          </GeneralThumb>
        </StyledSection>
      )}
    </>
  );
};

StreamerRecord.propTypes = {
  streamer: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    photoURL: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
