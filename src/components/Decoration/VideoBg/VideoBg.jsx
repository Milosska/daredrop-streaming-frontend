import bgVideo from '../../../assets/video/bgvideo.mp4';

import { Container, StyledVideo, Overlay } from './VideoBg.styled';

export const VideoBg = () => {
  return (
    <Container>
      <StyledVideo autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </StyledVideo>
      <Overlay />
    </Container>
  );
};
