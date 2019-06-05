import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.contrastText,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  userName: {
    marginLeft: '.5em',
  },
}));

export default useStyles;
