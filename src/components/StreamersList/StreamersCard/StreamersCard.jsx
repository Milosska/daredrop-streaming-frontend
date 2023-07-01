import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {
  addUpvotedStreamers,
  addDownvotedStreamers,
  removeUpvotedStreamers,
  removeDownvotedStreamers,
} from 'redux/streamers/streamersSilce';
import { useSelector } from 'react-redux';
import {
  selectUpvotedStreamers,
  selectDownvotedStreamers,
} from 'redux/selectors';

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
  streamer: { _id, name, photoURL, genre, platform, upvote, downvote },
}) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [rating, setRating] = useState(0);
  const upvotedStreamers = useSelector(selectUpvotedStreamers);
  const downvotedStreamers = useSelector(selectDownvotedStreamers);
  const dispatch = useDispatch();

  useEffect(() => {
    const upvotedState = upvotedStreamers.find(
      streamerId => streamerId === _id
    );
    const downvotedState = downvotedStreamers.find(
      streamerId => streamerId === _id
    );

    upvotedState ? setIsUpvoted(true) : setIsUpvoted(false);
    downvotedState ? setIsDownvoted(true) : setIsDownvoted(false);
  }, [upvotedStreamers, downvotedStreamers, _id]);

  useEffect(() => {
    const ratingRatio = upvote / (upvote + downvote);
    const currentRating = Math.round(ratingRatio * 5 * 100) / 100;
    setRating(currentRating);
  }, [upvote, downvote]);

  const handleUpvote = () => {
    if (isDownvoted) {
      fetchAPI('put', `/api/streamers/${_id}/vote`, {
        downvote: downvote - 1,
      });
      dispatch(removeDownvotedStreamers(_id));
    } else {
      fetchAPI('put', `/api/streamers/${_id}/vote`, { upvote: upvote + 1 });
      dispatch(addUpvotedStreamers(_id));
    }
  };

  const handleDownvote = () => {
    if (isUpvoted) {
      fetchAPI('put', `/api/streamers/${_id}/vote`, { upvote: upvote - 1 });
      dispatch(removeUpvotedStreamers(_id));
    } else {
      fetchAPI('put', `/api/streamers/${_id}/vote`, {
        downvote: downvote + 1,
      });
      dispatch(addDownvotedStreamers(_id));
    }
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
          <UpvoteBtn onClick={handleUpvote} disabled={isUpvoted}>
            <FaRegThumbsUp /> {isUpvoted ? 'Upvoted' : 'Upvote'}
          </UpvoteBtn>
          <DownvoteBtn onClick={handleDownvote} disabled={isDownvoted}>
            <FaRegThumbsDown />
            {isDownvoted ? 'Downvoted' : 'Downvote'}
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
    rating: PropTypes.number,
    upvote: PropTypes.number.isRequired,
    downvote: PropTypes.number.isRequired,
  }).isRequired,
};
