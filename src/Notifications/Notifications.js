import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const Notifications = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, variant } = useSelector(state => state.notifications);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant });
    }
  });

  return null;
};

export default Notifications;
