import 'modern-normalize';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/selectors';
import { GlobalStyles } from './GlobalStyles';

const lightThemeColors = {
  bgColors: {
    mainBg: '#FFFFFF',
  },
  textColors: {
    mainText: '#000000',
    accentText: '#304FFE',
  },
};

const darkThemeColors = {
  bgColors: {
    mainBg: '#303030',
  },
  textColors: {
    mainText: '#FFFFFF',
    accentText: '#C5CAE9',
  },
};

const otherColors = {
  commonColors: {
    accentElemBg: '#E91E63',
    linksBg: '#C5CAE9',
    socialsBg: '#0000001F',
    contrastText: '#FFFFFF',
  },
};

export const Themes = ({ children }) => {
  const darkTheme = { ...darkThemeColors, ...otherColors };
  const lightTheme = { ...lightThemeColors, ...otherColors };

  const currentTheme = useSelector(selectCurrentTheme);

  const theme = currentTheme => {
    return currentTheme ? lightTheme : darkTheme;
  };

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <StyleSheetManager shouldForwardProp={theme}>
        <GlobalStyles />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
};
