import styled from 'styled-components';

export const SocialsThumb = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  background-color: ${({ theme }) => theme.commonColors.socialsBg};
  border-radius: 50%;

  > svg {
    width: 32px;
    height: 32px;
    transform: scale(1);
    color: ${({ theme }) => theme.textColors.accentText};
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);

    > svg {
      color: ${({ theme }) => theme.commonColors.accentElemBg};
    }
  }
`;
