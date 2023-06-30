import { useState, useEffect } from 'react';
import { fetchAPI } from 'helpers/backendAPI';

import { HeroBg } from 'components/Decoration/HeroBg/HeroBg';
import * as heroBg from 'assets/images/main/hero-min.jpg';
import * as bigHeroBg from 'assets/images/main/hero@2x-min.jpg';

import { StreamerForm } from 'components/Forms/StreamerForm/StreamerForm';
import { StreamersList } from 'components/StreamersList/StreamersList';
import {
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
        setStreamers(response.results);
      } catch (err) {
        console.error(err);
      }
    };

    const timerId = setInterval(() => {
      getStreamers();
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <HeroBg image={heroBg.default} bigimage={bigHeroBg.default} />
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
