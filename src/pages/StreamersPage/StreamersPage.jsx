import {
  HeroHeaderBg,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from './StreamersPage.styled';

const StreamersPage = () => {
  return (
    <>
      <HeroHeaderBg />
      <HeroSection>
        <HeroSubtitle>Welcome to the Dare Drop Streaming Service</HeroSubtitle>
        <HeroTitle>Find the best streamer to your liking!</HeroTitle>
      </HeroSection>
    </>
  );
};

export default StreamersPage;
