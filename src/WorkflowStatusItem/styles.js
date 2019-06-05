import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  active: {
    fontWeight: 'bold',
    padding: '0 .5rem',
    borderBottomWidth: '.2rem',
    borderBottomStyle: 'solid',
  },
  inactive: {
    padding: '0 .5rem',
    borderBottomColor: 'transparent',
    opacity: '.25',
  },
  declinedStatus: {
    borderColor: '#DB3737',
  },
  draftStatus: {
    borderColor: '#FF6F00',
  },
  pendingStatus: {
    borderColor: '#FFE900',
  },
  acceptedStatus: {
    borderColor: '#00D226',
  },
}));

export default useStyles;
