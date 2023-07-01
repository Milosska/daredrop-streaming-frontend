import PropTypes from 'prop-types';

import { StreamersCard } from './StreamersCard/StreamersCard';
import { Controllers } from 'components/Controllers/Controllers';
import { UserMessage } from 'components/UserMessage/UserMessage';
import { StyledList } from './StreamersList.styled';

export const StreamersList = ({ streamers, maxPages, page, setPage }) => {
  return (
    <>
      {streamers.length > 0 ? (
        <StyledList>
          {streamers.map(streamer => {
            return <StreamersCard key={streamer._id} streamer={streamer} />;
          })}
        </StyledList>
      ) : (
        <UserMessage>
          Results with this filters are not found. <br /> Please, try other
          options.
        </UserMessage>
      )}

      {maxPages > 1 && (
        <Controllers page={page} maxPages={maxPages} setPage={setPage} />
      )}
    </>
  );
};

StreamersList.propTypes = {
  streamers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
