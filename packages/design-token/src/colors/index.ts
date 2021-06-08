import { ColorTheme } from './types';

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    primary: {
      900: '#4B0018',
      850: '#4B0018',
      800: '#640020',
    },
  },
});

export const dark: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    primary: {
      900: 'red',
      850: 'blue',
      800: 'green',
    },
  },
});
