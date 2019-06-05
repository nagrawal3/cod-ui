import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.loadContainer}>
      <div className={classes.loadHolder}>
        <div className={classes.loadBox} />
      </div>
      <div className={classes.loadHolder}>
        <div className={classes.loadBox} />
      </div>
      <div className={classes.loadHolder}>
        <div className={classes.loadBox} />
      </div>
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.shape({
    loadContainer: PropTypes.string,
    loadHolder: PropTypes.string,
    loadBox: PropTypes.string,
  }).isRequired,
};

export default Loader;
