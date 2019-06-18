import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useStyles from './styles';

const SubTitle = ({ children, label, variant, className }) => {
  const classes = useStyles();
  const classNames = classnames(className, {
    [classes.padded]: variant === 'padded',
  });

  return (
    <Typography className={classNames} variant="subtitle1" gutterBottom>
      {label && <span data-testid="subtitle-label" className={classes.label}>{`${label}: `}</span>}
      <span data-testid="subtitle-content">{children}</span>
    </Typography>
  );
};

SubTitle.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['padded']),
};

SubTitle.defaultProps = {
  label: null,
  className: null,
  variant: null,
};

export default SubTitle;
