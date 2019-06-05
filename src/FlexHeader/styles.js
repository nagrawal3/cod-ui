import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  marginTop: {
    margin: '5rem 0 0 0',
  },
  borderBottom: {
    borderBottom: '1px solid silver',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
