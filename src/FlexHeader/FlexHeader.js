import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const FlexHeader = ({ children, alignRight, borderBottom, marginTop }) => {
  const classes = useStyles();
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
};

FlexHeader.defaultProps = {
  alignRight: false,
  borderBottom: false,
  marginTop: false,
};

export default FlexHeader;
