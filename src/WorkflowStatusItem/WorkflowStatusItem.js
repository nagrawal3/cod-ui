import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

/**
 * Individual item for workflow
 */
const WorkflowStatusItem = props => {
  const { title, active, status, classes } = props;

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
  /**
   * Classes for styling purposes
   * Set ignore to hide from docs
   * @ignore
   */
  classes: PropTypes.shape({
    inactive: PropTypes.string,
    active: PropTypes.string,
    declinedStatus: PropTypes.string,
    draftStatus: PropTypes.string,
    pendingStatus: PropTypes.string,
    acceptedStatus: PropTypes.string,
  }).isRequired,
};

const styles = () => ({
  active: {
    fontWeight: 'bold',
    padding: '0 .5rem',
    borderBottomWidth: '.2rem',
    borderBottomStyle: 'solid',
  },
  inactive: {
    padding: '0 .5rem',
    borderBottomColor: 'transparent',
    opacity: '.25',
  },
  declinedStatus: {
    borderColor: '#DB3737',
  },
  draftStatus: {
    borderColor: '#FF6F00',
  },
  pendingStatus: {
    borderColor: '#FFE900',
  },
  acceptedStatus: {
    borderColor: '#00D226',
  },
});

export default withStyles(styles)(WorkflowStatusItem);
