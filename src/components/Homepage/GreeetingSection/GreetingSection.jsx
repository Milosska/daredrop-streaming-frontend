import { Logo } from 'components/Logo/Logo';
import { NavLinkBtn } from 'components/NavLinkBtn/NavLinkBtn';
import {
  Container,
  TextThumb,
  GreetingThumb,
  Header,
  GreetingText,
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
        <NavLinkBtn direction={'/streamers'} text={'Go to streamers'} />
      </TextThumb>
    </Container>
  );
};
