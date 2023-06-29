import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  width: 100%;
  height: 280px;
  padding: 10px;
  border-radius: 8px;

  font-size: 14px;

  background-image: linear-gradient(
    315deg,
    rgba(233, 30, 99, 0.5) 0%,
    rgba(48, 79, 254, 0.5) 100%
  );

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    font-size: 16px;
  }
`;

export const ImageThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 115px;
  height: 45%;

  border-radius: 8px;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 45%;

  border-right-width: 10px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.textColors.accentText};

  border-bottom-width: 10px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.textColors.accentText};

  overflow: hidden;

  @media screen and (min-width: 480px) {
    width: 150px;
    height: 55%;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 50%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoThumb = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 85%;

  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CardTitle = styled.h4`
  grid-row: 1 / 3;
  grid-column: 2 / 4;

  color: ${({ theme }) => theme.textColors.accentText};
  font-family: 'MontserratBold';
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledPlatform = styled.p`
  grid-row: 3 / 4;
  grid-column: 2 / 4;

  font-family: 'MontserratMedium';
`;

export const StyledGenre = styled.p`
  grid-row: 4 / 5;
  grid-column: 2 / 4;

  font-family: 'MontserratMedium';
`;

export const StyledRating = styled.p`
  grid-row: 5 / 6;
  grid-column: 2 / 4;
`;

export const VoteThumb = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  justify-items: center;

  grid-row: 6 / 9;
  grid-column: 1 / 4;

  @media screen and (min-width: 768px) {
    column-gap: 10px;
  }
`;

export const UpvotesText = styled.p`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: end;

  color: ${({ theme }) => theme.commonColors.inputCorrectText};
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;
export const DownvotesText = styled(UpvotesText)`
  grid-column: 2 / 3;
  color: ${({ theme }) => theme.commonColors.inputErrorText};

  > svg {
    margin-right: 5px;
  }
`;

export const UpvoteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: end;

  grid-row: 2 / 3;
  grid-column: 1 / 2;

  min-width: 100px;
  padding: 5px 20px;

  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.commonColors.inputCorrectText};
  border-radius: 37.5px;
  color: ${({ theme }) => theme.textColors.mainText};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.inputCorrectText};
    color: ${({ theme }) => theme.commonColors.contrastText};
  }

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  > svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;

    @media screen and (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;

export const DownvoteBtn = styled(UpvoteBtn)`
  grid-column: 2 / 3;
  border: 3px solid ${({ theme }) => theme.commonColors.inputErrorText};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.inputErrorText};
  }
`;
