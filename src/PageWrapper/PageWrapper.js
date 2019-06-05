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
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  className: PropTypes.string,
};

PageWrapper.defaultProps = {
  className: '',
  spacing: 3,
};

export default PageWrapper;
