export const selectCurrentTheme = state => state.theme.currentTheme;

export const selectUpvotedStreamers = state => state.streamers.upvotedStreamers;
export const selectDownvotedStreamers = state =>
  state.streamers.downvotedStreamers;
