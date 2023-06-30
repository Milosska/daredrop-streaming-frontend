import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const RatingNumber = styled.p`
  height: 20px;
  padding-left: 15px;
  align-self: center;

  font-size: 1.25em;

  border-left: 2px solid ${({ theme }) => theme.textColors.mainText};

  @media screen and (min-width: 768px) {
    height: 25px;
  }
`;
