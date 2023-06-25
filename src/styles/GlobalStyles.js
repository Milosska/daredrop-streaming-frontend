import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

export const GlobalStyles = createGlobalStyle`

  @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'MontserratMedium';
        src: local('MontserratMedium'),
        url(${MontserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

      @font-face {
        font-family: 'MontserratBold';
        src: local('MontserratBold'),
        url(${MontserratBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

body {
      position: relative;
  margin: 0;
  font-family: "MontserratRegular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.bgColors.mainBg};
  color:${props => props.theme.textColors.mainText};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

button {
  cursor: pointer;
  border: none;
  
  &:focus {
    outline: none;
  }
}
`;
