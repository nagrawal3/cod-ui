import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * A container that holds buttons
 */
const ButtonList = ({ children, align, marginTop, classes }) => {
  const className = classNames(classes.root, {
    [classes.alignTop]: align === 'top',
    [classes.alignBottom]: align === 'bottom',
    [classes.alignRight]: align === 'right',
    [classes.marginTop]: marginTop,
  });

  return (
    <Grid item className={className}>
      {children}
    </Grid>
  );
};

ButtonList.propTypes = {
  align: PropTypes.oneOf(['top', 'bottom', 'right']),
  marginTop: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
  classes: PropTypes.shape({
    alignTop: PropTypes.string.isRequired,
    alignBottom: PropTypes.string.isRequired,
    marginTop: PropTypes.string.isRequired,
  }).isRequired,
};

ButtonList.defaultProps = {
  align: 'top',
  marginTop: false,
};

const styles = theme => ({
  root: {
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
    '& > :not(:first-child)': {
      marginLeft: '1rem',
    },
  },
  alignTop: {
    alignItems: 'flex-start',
  },
  alignBottom: {
    alignItems: 'flex-end',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  marginTop: {
    marginTop: '1rem',
  },
});

export default withStyles(styles)(ButtonList);
