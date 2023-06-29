import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from 'helpers/backendAPI';

import { StreamerRecord } from 'components/StreamerRecord/StreamerRecord';

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
      <StreamerRecord streamer={streamer} />
    </>
  );
};

export default StreamerRecordPage;
