import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemDetail = props => {
  const { classes, label, value } = props;
  return (
    <ListItem>
      <ListItemText
        data-testid="label-list-text"
        className={classes.item}
        primaryTypographyProps={{ className: classes.label }}
        primary={label}
      />
      <ListItemText data-testid="value-list-text" primary={value} />
    </ListItem>
  );
};

ListItemDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  classes: PropTypes.shape({
    label: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
  }).isRequired,
};

ListItemDetail.defaultProps = {
  value: '',
};

const styles = theme => ({
  label: {
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  item: {
    flex: 'none',
    minWidth: '11rem',
  },
});

export default withStyles(styles)(ListItemDetail);
