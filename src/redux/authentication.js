import { RSAA } from 'redux-api-middleware';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import isEmpty from 'lodash/isEmpty';

export const LOG_OUT = 'LOG_OUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  dispatch({ type: LOG_OUT });
  dispatch(push('/login'));
};

export const authMiddleware = ({ getState, dispatch }) => next => action => {
  const state = getState();
  const isExpired = isEmpty(state.user) || state.user.expires_at < new Date() / 1000;

  // when routing to a different page or making an request
  // check if user is logged in
  // if not redirect to login page
  if (
    (action.type === LOCATION_CHANGE &&
      action.payload.location.pathname !== '/login' &&
      action.payload.location.pathname !== '/' &&
      isExpired) ||
    (action[RSAA] && isExpired)
  ) {
    const redirectUri = action[RSAA]
      ? ''
      : `?redirect_uri=${encodeURIComponent(action.payload.location.pathname)}`;
    return dispatch(push(`/login${redirectUri}`));
  }

  // when trying to access login page while logged in, redirect to homepage.
  if (
    action.type === LOCATION_CHANGE &&
    action.payload.location.pathname === '/login' &&
    !isExpired
  ) {
    return dispatch(push('/'));
  }

  // ajax request for when a user is logged in, need to append their access token to the request
  if (action[RSAA]) {
    // eslint-disable-next-line no-param-reassign
    action[RSAA].headers = {
      ...action[RSAA].headers,
      Authorization: `Bearer ${state.user.token}`,
    };
  }

  return next(action);
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};
