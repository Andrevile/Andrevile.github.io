import { BLACK, WHITE } from '../constants/colors';

export const theme = (mode: 'light' | 'dark') => ({
  mode,
  size: responsiveWidth,
  colors: mode === 'light' ? lightThemeColors : darkThemeColors,
});

const responsiveWidth = {
  lg: '1024px',
  md: '768px',
  sm: '320px',
};

export const lightThemeColors = {
  white: WHITE,
  black: BLACK,
  bgColor: WHITE,
  fontColor: BLACK,
};

export const darkThemeColors = {
  white: WHITE,
  black: BLACK,
  bgColor: BLACK,
  fontColor: WHITE,
};
