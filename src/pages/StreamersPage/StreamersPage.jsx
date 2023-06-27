import { StreamerForm } from 'components/Forms/StreamerForm/StreamerForm';
import {
  HeroHeaderBg,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  FormSection,
  FormSectionTitle,
} from './StreamersPage.styled';

const StreamersPage = () => {
  return (
    <>
      <HeroHeaderBg />
      <HeroSection>
        <HeroSubtitle>Welcome to the Dare Drop Streaming Service</HeroSubtitle>
        <HeroTitle>Find the best streamer to your liking!</HeroTitle>
      </HeroSection>
      <FormSection>
        <FormSectionTitle>Join the platform</FormSectionTitle>
        <StreamerForm />
      </FormSection>
    </>
  );
};

export default StreamersPage;
