import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const SubTitle = ({ children, label, classes }) => (
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

SubTitle.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
  classes: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

SubTitle.defaultProps = {
  label: null,
};

const styles = () => ({
  label: {
    fontWeight: 'bold',
    paddingRight: '1rem',
  },
});

export default withStyles(styles)(SubTitle);
