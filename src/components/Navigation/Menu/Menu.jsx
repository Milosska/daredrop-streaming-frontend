import { List, StyledLink } from './Menu.styled';

export const Menu = () => {
  return (
    <List>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/streamers">Streamers</StyledLink>
      </li>
    </List>
  );
};
