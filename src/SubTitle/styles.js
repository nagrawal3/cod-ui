import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 'bold',
    paddingRight: '0.25rem',
    fontVariant: 'small-caps',
  },
  padded: {
    padding: '0 2rem',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
}));

export default useStyles;
