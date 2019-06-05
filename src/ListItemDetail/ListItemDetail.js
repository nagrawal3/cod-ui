import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';

const ListItemDetail = props => {
  const { label, value } = props;
  const classes = useStyles();

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
};

ListItemDetail.defaultProps = {
  value: '',
};

export default ListItemDetail;
