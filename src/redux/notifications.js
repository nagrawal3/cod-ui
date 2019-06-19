export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const SHOW_ERROR_NOTIFICATION = 'SHOW_ERROR_NOTIFICATION';
export const SHOW_SUCCESS_NOTIFICATION = 'SHOW_SUCCESS_NOTIFICATION';
export const SHOW_WARNING_NOTIFICATION = 'SHOW_WARNING_NOTIFICATION';
export const SHOW_INFO_NOTIFICATION = 'SHOW_INFO_NOTIFICATION';

export function showNotification(message) {
  return {
    type: SHOW_NOTIFICATION,
    message,
    variant: 'default',
  };
}

export function showErrorNotification(message) {
  return {
    type: SHOW_ERROR_NOTIFICATION,
    message,
    variant: 'error',
  };
}

export function showSuccessNotification(message) {
  return {
    type: SHOW_SUCCESS_NOTIFICATION,
    message,
    variant: 'success',
  };
}

export function showWarningNotification(message) {
  return {
    type: SHOW_WARNING_NOTIFICATION,
    message,
    variant: 'warning',
  };
}

export function showInfoNotification(message) {
  return {
    type: SHOW_INFO_NOTIFICATION,
    message,
    variant: 'info',
  };
}

export function notificationsReducer(state = {}, action) {
  const { message, variant } = action;

  switch (action.type) {
    case SHOW_NOTIFICATION:
    case SHOW_ERROR_NOTIFICATION:
    case SHOW_SUCCESS_NOTIFICATION:
    case SHOW_WARNING_NOTIFICATION:
    case SHOW_INFO_NOTIFICATION:
      return { message, variant };

    default:
      break;
  }

  return state;
}
