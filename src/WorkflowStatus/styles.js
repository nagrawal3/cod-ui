import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  label: {
    fontWeight: 'bold',
    padding: '0 1rem 0 0',
  },
  arrow: {
    margin: '.25rem 0',
    opacity: '.1',
  },
  grow: {
    flexGrow: 1,
  },
}));

export default useStyles;
