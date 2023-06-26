import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  position: relative;
  z-index: 10;

  width: 100%;
  height: 80vh;

  text-align: center;
`;

export const TextThumb = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 900px;
  padding: 40px;
  background-color: ${({ theme }) => theme.bgColors.overlayBg};
  border-radius: 22px;

  font-size: 24px;
  font-family: 'MontserratMedium';
  line-height: 1.32;
`;

export const GreetingThumb = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  width: 800px;
  margin: 0 auto;

  :first-child {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const Header = styled.h1`
  font-family: 'MontserratBold';
  font-size: 42px;
  align-self: end;
`;

export const GreetingText = styled.p`
  align-self: start;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;

  background-color: ${({ theme }) => theme.commonColors.accentElemBg};
  box-shadow: 0px 0px 49px -2px rgba(0, 0, 0, 0.25);
  border-radius: 37.5px;

  font-family: 'MontserratMedium', sans-serif;
  font-size: 22px;
  color: ${({ theme }) => theme.commonColors.contrastText};

  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #304ffe;
    transform: scale(1.1);
  }
`;
