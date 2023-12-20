// @/views/ThemeRegistry/theme.jsx
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f0c000', // mainly orange color
    },
    secondary: {
      main: '#208080', // color of sea wave
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },

});

export default theme;
/*

*/