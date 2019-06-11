import React from 'react';
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

export default Loader;
