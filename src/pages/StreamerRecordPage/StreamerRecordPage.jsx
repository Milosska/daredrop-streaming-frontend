import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from 'helpers/backendAPI';

import { HeroBg } from 'components/Decoration/HeroBg/HeroBg';
import { StreamerRecord } from 'components/StreamerRecord/StreamerRecord';
import { PageTitle } from './StreamerRecordPage.styled';

const StreamerRecordPage = () => {
  const [streamer, setStreamer] = useState({});
  const { streamerId } = useParams();

  useEffect(() => {
    const getStreamerInfo = async () => {
      const response = await fetchAPI('get', `/api/streamers/${streamerId}`);
      setStreamer(response);
    };

    getStreamerInfo();
  }, [streamerId]);

  return (
    <>
      <HeroBg image={streamer.photoURL} bigimage={streamer.photoURL} />
      <PageTitle>Find out about your favorite streamer</PageTitle>
      <StreamerRecord streamer={streamer} />
    </>
  );
};

export default StreamerRecordPage;
