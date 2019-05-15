import React from 'react';
import PropTypes from 'prop-types';
import {
  PagingState,
  SortingState,
  SearchState,
  IntegratedFiltering,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table as DevExtremeTable,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import TableCell from '../TableCell';

const Table = props => {
  const { data, columns, pageSize, hasPagination, searchValue } = props;
  const tableColumnExtensions = [];

  columns.forEach(column => {
    if (column.width) {
      tableColumnExtensions.push({ columnName: column.name, width: column.width });
    }
  });

  return (
    <React.Fragment>
      <Grid rows={data} columns={columns}>
        <SortingState />
        <SearchState value={searchValue} />
        <IntegratedFiltering />

        {hasPagination && <PagingState defaultCurrentPage={0} pageSize={pageSize} />}
        {hasPagination && <IntegratedPaging />}
        <DevExtremeTable
          style={{ borderCollapse: 'collapse' }}
          cellComponent={TableCell}
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow showSortingControls />

        {hasPagination && <PagingPanel />}
      </Grid>
    </React.Fragment>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasPagination: PropTypes.bool,
  pageSize: PropTypes.number,
  searchValue: PropTypes.string,
};

Table.defaultProps = {
  hasPagination: false,
  pageSize: null,
  searchValue: '',
};

export default Table;
