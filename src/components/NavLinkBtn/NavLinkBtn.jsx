import { StyledLink } from './NavLinkBtn.styled';

export const NavLinkBtn = ({ direction, text }) => {
  return <StyledLink to={direction}>{text}</StyledLink>;
};
