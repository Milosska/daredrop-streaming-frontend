import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  margin: 20px 0;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;
