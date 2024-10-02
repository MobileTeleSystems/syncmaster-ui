import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';

import { PAGE_SIZES } from './constants';
import { useTableColumns, UseTableColumnsProps, useTablePagination, useTableQuery, UseTableQueryProps } from './hooks';
import classes from './styles.module.less';

interface ManagedTableProps<T>
  extends TableProps<T>,
    Omit<UseTableQueryProps<T>, 'pagination'>,
    UseTableColumnsProps<T> {}

export const ManagedTable = <T extends object>({
  queryFunction,
  queryKey,
  columns: initialColumns,
  onEditRowClick,
  onDeleteRowClick,
  isHiddenActions,
  ...props
}: ManagedTableProps<T>) => {
  const { pagination, handleChangePagination } = useTablePagination();

  const { data, isFetching } = useTableQuery({ queryKey, queryFunction, pagination });

  const { columns } = useTableColumns({ columns: initialColumns, onEditRowClick, onDeleteRowClick, isHiddenActions });

  return (
    <Table
      rowClassName={classes.row}
      dataSource={data?.items}
      columns={columns}
      loading={isFetching}
      pagination={{
        current: pagination.page,
        pageSize: pagination.pageSize,
        total: data?.meta.total,
        pageSizeOptions: PAGE_SIZES,
        onChange: handleChangePagination,
        showSizeChanger: true,
        ...props.pagination,
      }}
      {...props}
    />
  );
};
