import { useState, useEffect } from 'react';
import { fetchAPI } from 'helpers/backendAPI';

import { StreamerForm } from 'components/Forms/StreamerForm/StreamerForm';
import { StreamersList } from 'components/StreamersList/StreamersList';
import {
  HeroHeaderBg,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  FormSection,
  FormSectionTitle,
  StreamersSection,
  StreamersSectionTitle,
  TitleAccent,
} from './StreamersPage.styled';

const StreamersPage = () => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const getStreamers = async () => {
      try {
        const response = await fetchAPI('get', '/api/streamers');
        setStreamers(response);
      } catch (err) {
        console.error(err);
      }
    };

    getStreamers();
  }, []);

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
      <StreamersSection>
        <StreamersSectionTitle>
          Dare Drop <TitleAccent>Top Streamers</TitleAccent>
          <StreamersList streamers={streamers} />
        </StreamersSectionTitle>
      </StreamersSection>
    </>
  );
};

export default StreamersPage;
