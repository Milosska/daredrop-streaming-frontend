export const StreamerRecord = ({
  streamer: {
    _id,
    name,
    photoURI,
    genre,
    platform,
    description,
    rating,
    upvote,
    downvote,
  },
}) => {
  return (
    <section>
      <h2>{name}</h2>
    </section>
  );
};
