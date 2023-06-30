import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: ${({ height }) => `${height}px`};
`;

export const StyledImg = styled.img`
  width: auto;
  height: 100%;
`;

export const StyledLabel = styled.p`
  font-size: inherit;
`;
