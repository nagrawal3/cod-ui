import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import useStyles from './styles';

/**
 * Individual item for workflow
 */
const WorkflowStatusItem = props => {
  const { title, active, status } = props;
  const classes = useStyles();
  const className = classNames({
    [classes.active]: active,
    [classes.inactive]: !active,
    [classes.declinedStatus]: status === 'declined',
    [classes.draftStatus]: status === 'draft',
    [classes.pendingStatus]: status === 'pending',
    [classes.acceptedStatus]: status === 'accepted',
  });

  return (
    <Typography className={className} variant="overline" gutterBottom>
      {title}
    </Typography>
  );
};

WorkflowStatusItem.propTypes = {
  /**
   * Item label
   */
  title: PropTypes.string.isRequired,
  /**
   * Apply underscore
   */
  active: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['declined', 'draft', 'pending', 'accepted']).isRequired,
};

export default WorkflowStatusItem;
