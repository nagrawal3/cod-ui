import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar, SnackbarProvider } from 'notistack';

export const Notifications = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, variant } = useSelector(state => state.notifications);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant });
    }
  });

  return null;
};

const Provider = props => {
  return (
    <SnackbarProvider {...props}>
      <Notifications />
    </SnackbarProvider>
  );
};

export default Provider;
