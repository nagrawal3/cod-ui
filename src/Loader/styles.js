import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  loadContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotateX(-30deg) rotateY(-45deg)',
    'transform-style': 'preserve-3d',
    perspective: '2000px',
    '& *:before, & *:after, & *': {
      'box-sizing': 'border-box',
    },
  },
  loadHolder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) translate3d(0em, 3em, 1.5em)',
    'transform-style': 'preserve-3d',
    '&:last-child': {
      transform: 'rotateY(-90deg) rotateX(90deg) translate3d(0, 3em, 1.5em)',
    },
    '&:first-child': {
      transform: 'rotateZ(-90deg) rotateX(-90deg) translate3d(0, 3em, 1.5em)',
    },
    '&:nth-child(1) div': {
      'background-color': theme.palette.primary.light,
    },
    '&:nth-child(1) div:before': {
      'background-color': theme.palette.primary.lighter,
    },
    '&:nth-child(1) div:after': {
      'background-color': theme.palette.primary.lightest,
    },
    '&:nth-child(2) div': {
      'background-color': theme.palette.primary.dark,
    },
    '&:nth-child(2) div:before': {
      'background-color': theme.palette.primary.main,
    },
    '&:nth-child(2) div:after': {
      'background-color': theme.palette.primary.light,
    },
    '&:nth-child(3) div': {
      'background-color': theme.palette.secondary.dark,
    },
    '&:nth-child(3) div:before': {
      'background-color': theme.palette.secondary.main,
    },
    '&:nth-child(3) div:after': {
      'background-color': theme.palette.secondary.light,
    },
  },
  loadBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'transform-style': 'preserve-3d',
    animation: 'ani-box 6s infinite',
    width: '3em',
    height: '3em',
    '&:before, &:after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: 'no-open-quote',
    },
    '&:before': {
      left: '100%',
      bottom: 0,
      transform: 'rotateY(90deg)',
      'transform-origin': '0 50%',
    },
    '&:after': {
      left: 0,
      bottom: '100%',
      transform: 'rotateX(90deg)',
      'transform-origin': '0 100%',
    },
  },
  '@keyframes ani-box': {
    '8.33%': {
      transform: 'translate3d(-50%, -50%, 0) scaleZ(2)',
    },
    '16.7%': {
      transform: 'translate3d(-50%, -50%, -3em) scaleZ(1)',
    },
    '25%': {
      transform: 'translate3d(-50%, -100%, -3em) scaleY(2)',
    },
    '33.3%': {
      transform: 'translate3d(-50%, -150%, -3em) scaleY(1)',
    },
    '41.7%': {
      transform: 'translate3d(-100%, -150%, -3em) scaleX(2)',
    },
    '50%': {
      transform: 'translate3d(-150%, -150%, -3em) scaleX(1)',
    },
    '58.3%': {
      transform: 'translate3d(-150%, -150%, 0) scaleZ(2)',
    },
    '66.7%': {
      transform: 'translate3d(-150%, -150%, 0) scaleZ(1)',
    },
    '75%': {
      transform: 'translate3d(-150%, -100%, 0) scaleY(2)',
    },
    '83.3%': {
      transform: 'translate3d(-150%, -50%, 0) scaleY(1)',
    },
    '91.7%': {
      transform: 'translate3d(-100%, -50%, 0) scaleX(2)',
    },
    '100%': {
      transform: 'translate3d(-50%, -50%, 0) scaleX(1)',
    },
  },
}));

export default useStyles;
