import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
    paddingRight: '3rem',
  },
  shrink: {
    flexGrow: 0,
    paddingRight: '3rem',
  },
  marginTop: {
    marginTop: '3rem',
  },
}));

export default useStyles;
