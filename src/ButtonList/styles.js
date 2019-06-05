import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    '& > :not(:first-child)': {
      marginLeft: '1rem',
    },
  },
  alignTop: {
    alignItems: 'flex-start',
  },
  alignBottom: {
    alignItems: 'flex-end',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  marginTop: {
    marginTop: '1rem',
  },
}));

export default useStyles;
