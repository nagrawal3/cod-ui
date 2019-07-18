import React from 'react';
import PropTypes from 'prop-types';
import {
  PagingState,
  SortingState,
  SearchState,
  IntegratedSorting,
  IntegratedFiltering,
  IntegratedPaging,
  FilteringState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table as DevExtremeTable,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import TableCell from '../TableCell';

const Table = props => {
  const {
    data,
    columns,
    pageSize,
    hasPagination,
    searchValue,
    filters,
    sortable,
    defaultSorting,
  } = props;
  const tableColumnExtensions = [];

  columns.forEach(column => {
    if (column.width) {
      tableColumnExtensions.push({ columnName: column.name, width: column.width });
    }
  });

  return (
    <React.Fragment>
      <Grid rows={data} columns={columns}>
        {sortable && <SortingState defaultSorting={defaultSorting} />}
        {sortable && <IntegratedSorting />}
        <SearchState value={searchValue} />
        <FilteringState filters={filters} />
        <IntegratedFiltering />

        {hasPagination && <PagingState defaultCurrentPage={0} pageSize={pageSize} />}
        {hasPagination && <IntegratedPaging />}
        <DevExtremeTable
          style={{ borderCollapse: 'collapse' }}
          cellComponent={TableCell}
          columnExtensions={tableColumnExtensions}
        />
        {sortable ? <TableHeaderRow showSortingControls /> : <TableHeaderRow />}
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
  filters: PropTypes.arrayOf(PropTypes.shape({})),
  sortable: PropTypes.bool,
  defaultSorting: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  hasPagination: false,
  pageSize: 10,
  searchValue: '',
  filters: [],
  sortable: true,
  defaultSorting: [{}],
};

export default Table;
