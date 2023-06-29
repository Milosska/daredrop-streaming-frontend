import { fetchAPI } from 'helpers/backendAPI';

import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

import { NavLinkBtn } from 'components/NavLinkBtn/NavLinkBtn';
import {
  Container,
  ImageThumb,
  StyledImg,
  InfoThumb,
  CardTitle,
  StyledPlatform,
  StyledGenre,
  StyledRating,
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
        <StyledPlatform>
          Patform: <span>{platform}</span>
        </StyledPlatform>
        <StyledGenre>
          Genre: <span>{genre}</span>
        </StyledGenre>
        <StyledRating>
          Rating: <span>{rating ? rating : 0}</span>
        </StyledRating>
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
