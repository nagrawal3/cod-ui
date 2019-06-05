import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SectionTitle = ({ noWrap, component, variant, grow, children, marginTop }) => {
  const classes = useStyles();
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
};

SectionTitle.defaultProps = {
  noWrap: false,
  component: 'h6',
  marginTop: false,
  variant: 'h6',
  grow: false,
  children: [],
};

export default SectionTitle;
