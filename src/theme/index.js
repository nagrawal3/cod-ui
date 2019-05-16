import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
// TODO: add a logo
// import logo from './logo.svg';

const primary = {
  lightest: '#F6F6FA',
  lighter: '#C4C4CD',
  light: '#747480',
  main: '#2e2e38',
  dark: '#000000',
};

const secondary = {
  lightest: '#fffde7',
  lighter: '#fff59d',
  light: '#fff17c',
  main: '#ffe600',
  dark: '#ffbf00',
};

const breakpoints = {
  values: {
    xl: 1920,
    lg: 1170,
    md: 960,
    sm: 600,
    xs: 0,
  },
};

const hyperlinks = {
  link: '#0070D2',
  visited: '#0070D2',
  hover: '#328cdb',
  active: '#66a9e4',
};

const typography = {
  fontSize: 14,
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  useNextVariants: true,
};

export default {
  palette: {
    primary,
    secondary,
    danger: '#ffe1e1',
    warning: '#ffffda',
    success: '#e6ffed',
    info: '#f1f8ff',
    highlight: '#ffefd9',
  },
  breakpoints,
  overrides: {
    MuiLink: {
      root: {
        color: hyperlinks.link,
        '&:visited': { color: hyperlinks.visited },
        '&:hover': { color: hyperlinks.hover },
        '&:active': { color: hyperlinks.active },
      },
    },
    MuiButton: {
      outlinedPrimary: {
        color: blue[500],
        borderColor: blue[500],
        '&:hover': {
          borderColor: blue[500],
          backgroundColor: '#f1f8ff',
        },
      },
      outlinedSecondary: {
        color: red[800],
        borderColor: red[800],
        '&:hover': {
          borderColor: red[800],
          backgroundColor: '#ffe1e1',
        },
      },
    },
  },
  typography,
  // logo,
};
