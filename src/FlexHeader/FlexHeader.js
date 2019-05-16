import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const FlexHeader = ({ children, alignRight, borderBottom, marginTop, classes }) => {
  const classNames = classnames(classes.root, {
    [classes.alignRight]: alignRight,
    [classes.borderBottom]: borderBottom,
    [classes.marginTop]: marginTop,
  });

  return (
    <Grid data-testid="flex-header" container className={classNames}>
      {children}
    </Grid>
  );
};

FlexHeader.propTypes = {
  alignRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    marginTop: PropTypes.string.isRequired,
    borderBottom: PropTypes.string.isRequired,
  }).isRequired,
};

FlexHeader.defaultProps = {
  alignRight: false,
  borderBottom: false,
  marginTop: false,
};

const styles = () => ({
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
});

export default withStyles(styles)(FlexHeader);
