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
            style={{ width: 180, justifySelf: 'end', marginRight: 15 }}
            value={rating}
            itemStyles={customStyles}
            readOnly
          />
          <RatingNumber>{rating}</RatingNumber>
          <p>
            <ParameterLable>Genre:</ParameterLable>
            <GenreBadge
              genre={genre}
              styles={{ gridRow: '4 / 5', gridColumn: '2 / 4' }}
            />
          </p>
          <PlatformThumb>
            <ParameterLable>Platform:</ParameterLable>
            <PlatformBadge platform={platform} height={25} />
          </PlatformThumb>
        </StreamerInfoThumb>
        <StyledDescription>
          <ParameterLable>Activity description:</ParameterLable>
          {description}
        </StyledDescription>
        <ImageThumb>
          <StyledImage src={photoURL} alt={name} />
        </ImageThumb>
      </GeneralThumb>
    </StyledSection>
  );
};
