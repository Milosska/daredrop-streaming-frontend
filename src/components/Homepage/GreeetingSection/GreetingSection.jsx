import { Logo } from 'components/Logo/Logo';

import {
  Container,
  TextThumb,
  GreetingThumb,
  Header,
  GreetingText,
  StyledLink,
} from './GreetingSection.styled';

export const GreetingSection = () => {
  return (
    <Container>
      <TextThumb>
        <GreetingThumb>
          <Logo />
          <Header>Wellcome to our service</Header>
          <GreetingText>We are glad to see you!</GreetingText>
        </GreetingThumb>

        <StyledLink to="/streamers">Go to streamers</StyledLink>
      </TextThumb>
    </Container>
  );
};
