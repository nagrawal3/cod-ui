import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { logout as logoutAction } from '../redux/authentication';

const PrimaryNavigation = ({ user, logout, classes }) => {
  const [open, setOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState();

  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          {window.config.mainNav.map(nav => (
            <Button
              key={nav.href}
              component="a"
              href={nav.href}
              className={classes.button}
              data-testid="partner-button"
              target="_blank"
            >
              {nav.label}
            </Button>
          ))}

          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={() => setOpen(true)}
            color="inherit"
            buttonRef={setMenuAnchor}
            data-testid="user-button"
          >
            <AccountCircle />

            <Typography variant="body1" color="inherit" className={classes.userName}>
              {user.email}
            </Typography>
          </IconButton>

          <Menu
            anchorEl={menuAnchor}
            id="menu-appbar"
            open={open}
            onClick={() => setOpen(false)}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MenuItem disabled>My Organization</MenuItem>
            <MenuItem onClick={logout}>Log Out</MenuItem>
          </Menu>
        </React.Fragment>
      ) : (
        <Button component={Link} to="/login" className={classes.button}>
          Login
        </Button>
      )}
    </React.Fragment>
  );
};

PrimaryNavigation.propTypes = {
  user: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};

PrimaryNavigation.defaultProps = {
  user: null,
};

const styles = theme => ({
  button: {
    color: theme.palette.primary.contrastText,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  userName: {
    marginLeft: '.5em',
  },
});

const mapStateToProps = state => ({
  user: isEmpty(state.user) ? null : state.user,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { logout: logoutAction },
  ),
)(PrimaryNavigation);
