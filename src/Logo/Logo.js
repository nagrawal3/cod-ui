import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

function Logo(props) {
  const { theme, classes, href } = props;

  return (
    <Link to={href || '/'}>
      <img alt="Logo" src={theme.logo} className={classes.logo} />
    </Link>
  );
}

Logo.propTypes = {
  classes: PropTypes.shape({ logo: PropTypes.string.isRequired }).isRequired,
  theme: PropTypes.shape({
    logo: PropTypes.string.isRequired,
  }).isRequired,
  href: PropTypes.string.isRequired,
};

const styles = () => ({
  logo: {
    width: '2rem',
    maxHeight: '2.5rem',
    marginRight: '1rem',
  },
});

export default withStyles(styles, { withTheme: true })(Logo);
