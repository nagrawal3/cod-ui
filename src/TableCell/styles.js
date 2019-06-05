import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
  grow: {
    flexGrow: 2,
  },
  success: {
    background: theme.palette.success,
  },
  danger: {
    background: theme.palette.danger,
  },
  warning: {
    background: theme.palette.warning,
  },
  info: {
    background: theme.palette.info,
  },
  highlight: {
    background: theme.palette.highlight,
  },
}));

export default useStyles;
