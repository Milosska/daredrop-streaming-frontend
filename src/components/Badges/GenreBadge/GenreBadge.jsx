import PropTypes from 'prop-types';
import { StyledGenreBadge } from './GenreBadge.styled';

export const GenreBadge = ({ genre }) => {
  return <StyledGenreBadge genre={genre}>{genre}</StyledGenreBadge>;
};

GenreBadge.propTypes = {
  genre: PropTypes.string.isRequired,
};
