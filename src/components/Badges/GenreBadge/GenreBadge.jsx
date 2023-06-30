import { StyledGenreBadge } from './GenreBadge.styled';

export const GenreBadge = ({ genre, styles }) => {
  return (
    <StyledGenreBadge genre={genre} styles={styles}>
      {genre}
    </StyledGenreBadge>
  );
};
