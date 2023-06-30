import PropTypes from 'prop-types';
import { StyledLink } from './NavLinkBtn.styled';

export const NavLinkBtn = ({ direction, text }) => {
  return <StyledLink to={direction}>{text}</StyledLink>;
};

NavLinkBtn.propTypes = {
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
