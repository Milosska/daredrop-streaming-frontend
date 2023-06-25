import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

export const Themes = ({ children }) => {
  const theme = (checkTheme = true) => {
    return checkTheme
      ? { ...lightTheme, ...otherColors }
      : { ...darkTheme, ...otherColors };
  };

  const lightTheme = {
    bgColors: {
      mainBg: '#FFFFFF',
      linksBg: '#C5CAE9',
    },
    textColors: {
      mainText: '#000000',
      accentText: '#304FFE',
    },
  };

  const darkTheme = {
    bgColors: {
      mainBg: '#303030',
      linksBg: '#C5CAE9',
    },
    textColors: {
      mainText: '#FFFFFF',
      accentText: '#C5CAE9',
    },
  };

  const otherColors = {
    commonColors: {
      accentElemBg: '#E91E63',
      contrastText: '#FFFFFF',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
