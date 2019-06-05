import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SubTitle = ({ children, label }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {label && (
        <Typography
          className={classes.label}
          variant="overline"
          gutterBottom
          data-testid="subtitle-label"
        >
          {`${label}: `}
        </Typography>
      )}
      <Typography data-testid="subtitle-content" variant="subtitle1" gutterBottom>
        {children}
      </Typography>
    </React.Fragment>
  );
};

SubTitle.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
};

SubTitle.defaultProps = {
  label: null,
};

export default SubTitle;
