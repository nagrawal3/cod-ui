import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  label: {
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  item: {
    flex: 'none',
    minWidth: '11rem',
  },
}));

export default useStyles;
