import { Rating, Star } from '@smastrom/react-rating';
import { GenreBadge } from 'components/Badges/GenreBadge/GenreBadge';
import { PlatformBadge } from '../Badges/PlatformBadge/PlatformBadge';
import {
  StyledSection,
  StyledSubtitle,
  StyledTitle,
  GeneralThumb,
  StreamerInfoThumb,
  RatingNumber,
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
  const customStyles = {
    itemShapes: Star,
    activeFillColor: '#FFAC33',
    inactiveFillColor: '#CEC9C1',
  };

  return (
    <StyledSection>
      <StyledSubtitle>Dare Drop Streamer</StyledSubtitle>
      <StyledTitle>{name}</StyledTitle>
      <GeneralThumb>
        <StreamerInfoThumb>
          <Rating
            style={{ maxWidth: 180, justifySelf: 'end', marginRight: 15 }}
            value={rating}
            itemStyles={customStyles}
            readOnly
          />
          <RatingNumber>{rating}</RatingNumber>
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
  );
};
