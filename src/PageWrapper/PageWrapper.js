import React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const PageWrapper = ({ children, spacing, className, ...props }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid container {...props}>
        <Grid container spacing={spacing} justify="center" className={className}>
          {children}
        </Grid>
      </Grid>
    </main>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([0, 8, 16, 24, 32, 40]),
  className: PropTypes.string,
};

PageWrapper.defaultProps = {
  className: '',
  spacing: 24,
};

export default PageWrapper;
