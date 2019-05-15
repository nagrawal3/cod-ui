import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { compose } from 'redux';

const Notifications = ({ enqueueSnackbar, message, variant }) => {
  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant });
    }
  }, [message]);

  return null;
};

Notifications.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
  message: PropTypes.string,
  variant: PropTypes.string,
};

Notifications.defaultProps = {
  notifications: [],
  message: null,
  variant: null,
};

const mapStateToProps = state => {
  const { notifications } = state;

  if (!notifications.length) {
    return { message: null, variant: null };
  }

  const notification = notifications[notifications.length - 1];
  return {
    message: notification.message,
    variant: notification.variant,
  };
};

export default compose(
  withSnackbar,
  connect(mapStateToProps),
)(Notifications);
