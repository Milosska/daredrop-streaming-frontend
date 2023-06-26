import { NavLinkBtn } from 'components/NavLinkBtn/NavLinkBtn';
import {
  Container,
  ImageThumb,
  ErrorCodeText,
  TextThumb,
  Header,
  Subtitle,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <ImageThumb>
        <ErrorCodeText>404</ErrorCodeText>
      </ImageThumb>
      <TextThumb>
        <Header>This page could not be found</Header>
        <Subtitle>
          You can either stay and chill here, or go back to the beginning.
        </Subtitle>
        <NavLinkBtn direction={'/'} text={'Back to home'} />
      </TextThumb>
    </Container>
  );
};

export default NotFoundPage;
