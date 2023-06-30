import PropTypes from 'prop-types';
import { fetchAPI } from 'helpers/backendAPI';

import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

import { StaredRating } from 'components/Badges/Rating/StarRating';
import { PlatformBadge } from 'components/Badges/PlatformBadge/PlatformBadge';
import { GenreBadge } from 'components/Badges/GenreBadge/GenreBadge';
import { NavLinkBtn } from 'components/NavLinkBtn/NavLinkBtn';

import {
  Container,
  ImageThumb,
  StyledImg,
  InfoThumb,
  CardTitle,
  UpvotesText,
  DownvotesText,
  VoteThumb,
  UpvoteBtn,
  DownvoteBtn,
} from './StreamersCard.Styled';

export const StreamersCard = ({
  streamer: { _id, name, photoURL, genre, platform, upvote, downvote, rating },
}) => {
  const handleUpvote = () => {
    fetchAPI('put', `/api/streamers/${_id}/vote`, { upvote: upvote + 1 });
  };

  const handleDownvote = () => {
    fetchAPI('put', `/api/streamers/${_id}/vote`, { downvote: downvote + 1 });
  };

  return (
    <Container>
      <ImageThumb>
        <StyledImg src={photoURL} alt={name} width="150px" height="250px" />
      </ImageThumb>
      <InfoThumb>
        <CardTitle>{name}</CardTitle>
        <StaredRating
          rating={rating}
          style={{ maxWidth: 90, justifySelf: 'end', marginRight: 15 }}
        />
        <PlatformBadge platform={platform} height={20} />
        <GenreBadge genre={genre} />
        <VoteThumb>
          <UpvotesText>
            <ImArrowUp /> {upvote}
          </UpvotesText>
          <DownvotesText>
            <ImArrowDown />
            {downvote}
          </DownvotesText>
          <UpvoteBtn onClick={handleUpvote}>
            <FaRegThumbsUp /> Upvote
          </UpvoteBtn>
          <DownvoteBtn onClick={handleDownvote}>
            <FaRegThumbsDown /> Downvote
          </DownvoteBtn>
        </VoteThumb>
      </InfoThumb>
      <NavLinkBtn direction={`/streamers/${_id}`} text="View Details" />
    </Container>
  );
};

StreamersCard.propTypes = {
  streamer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    genre: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    upvote: PropTypes.number.isRequired,
    downvote: PropTypes.number.isRequired,
  }).isRequired,
};
