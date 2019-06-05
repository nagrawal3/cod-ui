import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@material-ui/styles/useTheme';
import Link from '../Link';
import useStyles from './styles';

function Logo(props) {
  const { href } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link to={href || '/'}>
      {theme.logo && <img alt="Logo" src={theme.logo} className={classes.logo} />}
    </Link>
  );
}

Logo.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Logo;
