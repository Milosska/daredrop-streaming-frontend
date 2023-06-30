import { useState, useEffect } from 'react';
import { getStreamersAPI } from 'helpers/backendAPI';

import { HeroBg } from 'components/Decoration/HeroBg/HeroBg';
import * as heroBg from 'assets/images/main/hero-min.jpg';
import * as bigHeroBg from 'assets/images/main/hero@2x-min.jpg';

import { StreamerForm } from 'components/Forms/StreamerForm/StreamerForm';
import { StreamersList } from 'components/StreamersList/StreamersList';
import { Controllers } from 'components/Controllers/Controllers';
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
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const limit = 6;

  console.log(page);

  useEffect(() => {
    const getStreamers = async () => {
      try {
        const response = await getStreamersAPI(page, limit);
        setStreamers(response.results);
        const maxResultPages = Math.ceil(response.totalCount / limit);
        setMaxPages(maxResultPages);
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
  }, [page, limit]);

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
        </StreamersSectionTitle>
        <StreamersList streamers={streamers} />
        {maxPages > 1 && (
          <Controllers page={page} maxPages={maxPages} setPage={setPage} />
        )}
      </StreamersSection>
    </>
  );
};

export default StreamersPage;
