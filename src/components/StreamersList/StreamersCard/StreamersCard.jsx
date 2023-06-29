import { NavLinkBtn } from 'components/NavLinkBtn/NavLinkBtn';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

import {
  Container,
  ImageThumb,
  StyledImg,
  InfoThumb,
  CardTitle,
  StyledPlatform,
  StyledGenre,
  UpvotesText,
  DownvotesText,
  VoteThumb,
  UpvoteBtn,
  DownvoteBtn,
} from './StreamersCard.Styled';

export const StreamersCard = ({
  streamer: { _id, name, photoURL, genre, platform, upvote, downvote },
}) => {
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
        <VoteThumb>
          <UpvotesText>
            <ImArrowUp /> {upvote}
          </UpvotesText>
          <DownvotesText>
            <ImArrowDown />
            {downvote}
          </DownvotesText>
          <UpvoteBtn>
            <FaRegThumbsUp /> Upvote
          </UpvoteBtn>
          <DownvoteBtn>
            {' '}
            <FaRegThumbsDown /> Downvote
          </DownvoteBtn>
        </VoteThumb>
      </InfoThumb>
      <NavLinkBtn direction={`/streamers/${_id}`} text="View Details" />
    </Container>
  );
};
