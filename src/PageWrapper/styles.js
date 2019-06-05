import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  /**
   * A little CSS hackiness to prevent vertical overflow from the main grid,
   * but also still get the column spacing we want.
   *
   * @see {@link https://material-ui.com/layout/grid/#negative-margin}
   */
  root: {
    minHeight: '100vh',
    maxWidth: theme.breakpoints.values.lg,
    margin: 'auto',
    marginBottom: '4rem',
    padding: theme.typography.pxToRem(12),
  },
}));

export default useStyles;
