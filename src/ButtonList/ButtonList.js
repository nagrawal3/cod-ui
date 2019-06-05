import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import useStyles from './styles';

/**
 * A container that holds buttons
 */
const ButtonList = ({ children, align, marginTop }) => {
  const classes = useStyles();
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
};

ButtonList.defaultProps = {
  align: 'top',
  marginTop: false,
};

export default ButtonList;
