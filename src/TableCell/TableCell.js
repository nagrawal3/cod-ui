import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Table } from '@devexpress/dx-react-grid-material-ui';

const TableCell = props => {
  const { classes, tableColumn, value, row } = props;
  const { columnClass, customFormatter, Component, cellClasses = {} } = tableColumn.column;
  const customCellClasses = {};
  let contents;

  // If column has 'cellClasses' defined, call the function to determine if the class is active
  Object.keys(cellClasses).forEach(classname => {
    if (typeof cellClasses[classname] === 'function') {
      customCellClasses[classes[classname]] = cellClasses[classname](value, row);
    }
  });

  // If column has `columnClass` defined, add the class to the entire column
  const customClasses = classnames(
    Object.assign({ [classes[columnClass]]: !!classes[columnClass] }, customCellClasses),
  );

  // If column has `customFormatter` defined, format the new display value
  const formattedValue = customFormatter ? customFormatter(value, row) : value;

  // If column has `Component` defined, use the custom component instead of the cell value
  if (customFormatter && Component) {
    contents = <Component {...props}>{formattedValue}</Component>;
  } else {
    contents = formattedValue;
  }

  return (
    <Table.Cell className={customClasses}>
      <Typography variant="body1">{contents}</Typography>
    </Table.Cell>
  );
};

TableCell.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  tableColumn: PropTypes.shape({}).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  row: PropTypes.shape({}).isRequired,
};

TableCell.defaultProps = {
  value: '',
};

const styles = theme => ({
  bold: {
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
  grow: {
    flexGrow: 2,
  },
  success: {
    background: theme.palette.success,
  },
  danger: {
    background: theme.palette.danger,
  },
  warning: {
    background: theme.palette.warning,
  },
  info: {
    background: theme.palette.info,
  },
  highlight: {
    background: theme.palette.highlight,
  },
});

export default withStyles(styles)(TableCell);
