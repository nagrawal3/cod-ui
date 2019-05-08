import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const SectionTitle = ({ noWrap, component, variant, grow, children, marginTop, classes }) => {
  const wrapperClasses = classNames({
    [classes.grow]: grow,
    [classes.shrink]: !grow,
    [classes.marginTop]: marginTop,
  });

  return (
    <Grid data-testid="section-title-grid" item xs className={wrapperClasses}>
      <Typography
        data-testid="section-title-typography"
        noWrap={noWrap}
        component={component}
        variant={variant}
        className={classes.text}
      >
        {children}
      </Typography>
    </Grid>
  );
};

SectionTitle.propTypes = {
  noWrap: PropTypes.bool,
  component: PropTypes.string,
  variant: PropTypes.string,
  marginTop: PropTypes.bool,
  grow: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]),
  classes: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

SectionTitle.defaultProps = {
  noWrap: false,
  component: 'h6',
  marginTop: false,
  variant: 'h6',
  grow: false,
  children: [],
};

const styles = theme => ({
  text: {
    marginBottom: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
    paddingRight: '3rem',
  },
  shrink: {
    flexGrow: 0,
    paddingRight: '3rem',
  },
  marginTop: {
    marginTop: '3rem',
  },
});

export default withStyles(styles)(SectionTitle);
