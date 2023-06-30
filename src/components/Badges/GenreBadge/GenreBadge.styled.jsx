import styled from 'styled-components';

const setColor = genre => {
  switch (genre) {
    case 'alternative':
      return 'rgba(240, 246, 210, 0.8)';

    case 'challenge':
      return 'rgba(246, 210, 217, 0.8)';

    case 'comedy':
      return 'rgba(238, 210, 246, 0.8)';

    case 'creative':
      return 'rgba(210, 226, 246, 0.8)';

    case 'educatuional':
      return 'rgba(242, 246, 186, 0.8)';

    case 'games':
      return 'rgba(213, 195, 250, 0.8)';

    case 'interview':
      return 'rgba(195, 248, 250, 0.8)';

    case 'irl':
      return 'rgba(246, 210, 229, 0.8)';

    case 'movies':
      return 'rgba(250, 195, 196, 0.8)';

    case 'reactions':
      return 'rgba(250, 250, 122, 0.8)';

    case 'tutorials':
      return 'rgba(195, 250, 199, 0.8)';

    case 'webcasts':
      return 'rgba(246, 231, 210, 0.8)';

    default:
      return 'transparent';
  }
};

export const StyledGenreBadge = styled.span`
  display: inline-block;
  padding: 1% 8%;
  margin: 0 auto;

  background-color: ${({ genre }) => setColor(genre)};
  border: 1px solid ${({ genre }) => setColor(genre)};
  border-radius: 37.5px;

  color: ${({ theme }) => theme.commonColors.contrastDarkText};
`;
