import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import WorkflowStatusItem from '../WorkflowStatusItem';
import useStyles from './styles';

/**
 * Displays the current state of an editorial workflow
 *
 * @example ../__docs__/WorkflowStatus.md
 */
const WorkflowStatus = ({ status, label }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.grow}>
      <Grid container>
        {label && (
          <Typography
            data-testid="workflow-label"
            className={classes.label}
            variant="overline"
            gutterBottom
          >
            {label}
          </Typography>
        )}

        <WorkflowStatusItem title="Declined" active={status === 'declined'} status="declined" />
        <ArrowLeftIcon className={classes.arrow} />
        <WorkflowStatusItem title="Draft" active={status === 'draft'} status="draft" />
        <ArrowRightIcon className={classes.arrow} />
        <WorkflowStatusItem title="Pending" active={status === 'pending'} status="pending" />
        <ArrowRightIcon className={classes.arrow} />
        <WorkflowStatusItem title="Accepted" active={status === 'accepted'} status="accepted" />
      </Grid>
    </Grid>
  );
};

WorkflowStatus.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string,
};

WorkflowStatus.defaultProps = {
  label: null,
};

export default WorkflowStatus;
