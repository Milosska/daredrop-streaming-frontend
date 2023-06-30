import PropTypes from 'prop-types';
import { StreamersCard } from './StreamersCard/StreamersCard';
import { StyledList } from './StreamersList.styled';

export const StreamersList = ({ streamers }) => {
  return (
    <StyledList>
      {streamers.map(streamer => {
        return <StreamersCard key={streamer._id} streamer={streamer} />;
      })}
    </StyledList>
  );
};

StreamersList.propTypes = {
  streamers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
