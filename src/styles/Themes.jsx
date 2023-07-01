import 'modern-normalize';
import '@smastrom/react-rating/style.css';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/selectors';
import { GlobalStyles } from './GlobalStyles';

import * as formBgLight from 'assets/images/main/form_bg_light.jpg';
import * as formBgDark from 'assets/images/main/form_bg_dark.jpg';

const lightThemeColors = {
  bgColors: {
    mainBg: '#FFFFFF',
    overlayBg: 'rgba(255, 255, 255, 0.6)',
    fileInputBg: '#e9e5e5',
    fileInputHoverBg: '#ccc9c9',
    filterMenuBg: '#8630fe2c',
  },
  textColors: {
    mainText: '#000000',
    accentText: '#304FFE',
  },
  bgImages: {
    streamerFormBg: `url(${formBgLight.default})`,
  },
};

const darkThemeColors = {
  bgColors: {
    mainBg: '#303030',
    overlayBg: 'rgba(48, 48, 48, 0.6)',
    fileInputBg: '#525252',
    fileInputHoverBg: '#767575',
    filterMenuBg: '#caa4fe3d',
  },
  textColors: {
    mainText: '#FFFFFF',
    accentText: '#C5CAE9',
  },
  bgImages: {
    streamerFormBg: `url(${formBgDark.default})`,
  },
};

const otherColors = {
  commonColors: {
    accentElemBg: '#E91E63',
    linksBg: '#C5CAE9',
    socialsBg: '#0000001F',
    contrastText: '#FFFFFF',
    contrastDarkText: '#303030',
    errorCodeText: '#880e4f',
    inputErrorText: '#DA1414',
    inputCorrectText: '#228054',
    disabledBtnText: '#00000057',
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
