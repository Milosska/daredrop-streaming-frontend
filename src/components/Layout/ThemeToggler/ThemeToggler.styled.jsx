import styled from 'styled-components';
import Toggle from 'react-toggle';

export const StyledToggle = styled(Toggle)`
  &.react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
  }

  & svg {
    position: relative;
    top: -5px;
    left: -5px;

    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.commonColors.contrastText};

    @media screen and (min-width: 768px) {
      top: -10px;
    }
  }
`;
