import React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const PageWrapper = ({ children, spacing, className, classes, ...props }) => (
  <main className={classes.root}>
    <Grid container {...props}>
      <Grid container spacing={spacing} justify="center" className={className}>
        {children}
      </Grid>
    </Grid>
  </main>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([0, 8, 16, 24, 32, 40]),
  className: PropTypes.string,
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
};

PageWrapper.defaultProps = {
  className: '',
  spacing: 24,
};

/**
 * A little CSS hackiness to prevent vertical overflow from the main grid,
 * but also still get the column spacing we want.
 *
 * @see {@link https://material-ui.com/layout/grid/#negative-margin}
 */
const styles = theme => ({
  root: {
    minHeight: '100vh',
    maxWidth: theme.breakpoints.values.lg,
    margin: 'auto',
    marginBottom: '4rem',
    padding: theme.typography.pxToRem(12),
  },
});

export default withStyles(styles)(PageWrapper);
