import { useState, useEffect } from 'react';
import { socket } from 'socket';
import { getStreamersAPI } from 'helpers/backendAPI';

import { HeroBg } from 'components/Decoration/HeroBg/HeroBg';
import * as heroBg from 'assets/images/main/hero-min.jpg';
import * as bigHeroBg from 'assets/images/main/hero@2x-min.jpg';

import { StreamerForm } from 'components/Forms/StreamerForm/StreamerForm';
import { FilterMenu } from 'components/FilterMenu/FilterMenu';
import { StreamersList } from 'components/StreamersList/StreamersList';
import { UserMessage } from 'components/UserMessage/UserMessage';
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
  const [isLoading, setIsLoading] = useState(false);
  const [streamers, setStreamers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [userChoice, setUserChoice] = useState({});
  const limit = 6;

  useEffect(() => {
    socket.on(
      'data-changed',
      ({ documentKey: { _id }, updateDescription: { updatedFields } }) => {
        // const changedData = Object.entries(updatedFields);
        // console.log(changedData);

        setStreamers(prevState => {
          const newStreamers = prevState.map(streamer => {
            if (streamer._id === _id) {
              return { ...streamer, ...updatedFields };
            } else {
              return streamer;
            }
          });
          return newStreamers;
        });
      }
    );

    return () => {
      socket.off('data-changed');
    };
  }, [streamers]);

  useEffect(() => {
    setIsLoading(true);

    const getStreamers = async () => {
      const params = { page, limit, ...userChoice };

      try {
        const response = await getStreamersAPI(params);
        setStreamers(response.results);
        const maxResultPages = Math.ceil(response.totalCount / limit);
        setMaxPages(maxResultPages);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getStreamers();

    // const timerId = setInterval(() => {
    //   getStreamers();
    // }, 2000);

    // return () => {
    //   clearInterval(timerId);
    // };
  }, [page, limit, userChoice]);

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
        <FilterMenu setUserChoice={setUserChoice} />
        {isLoading ? (
          <UserMessage>Please, wait. The data is fetching.</UserMessage>
        ) : (
          <StreamersList
            streamers={streamers}
            maxPages={maxPages}
            page={page}
            setPage={setPage}
          />
        )}
      </StreamersSection>
    </>
  );
};

export default StreamersPage;
