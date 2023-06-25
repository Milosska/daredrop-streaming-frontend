import { ThemeToggler } from 'components/Layout/ThemeToggler/ThemeToggler';
import { Container, List, StyledLink } from './Menu.styled';

export const Menu = () => {
  return (
    <Container>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/streamers">Streamers</StyledLink>
        </li>
      </List>
      <ThemeToggler />
    </Container>
  );
};
