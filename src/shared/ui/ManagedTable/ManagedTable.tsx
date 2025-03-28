import React from 'react';
import { Table } from 'antd';

import { PAGE_SIZES } from './constants';
import { useTableColumns, useTablePagination, useTableQuery } from './hooks';
import { ManagedTableProps } from './types';
import classes from './styles.module.less';

export const ManagedTable = <T extends object>({
  queryFunction,
  queryKey,
  columns: initialColumns,
  isRenderUpdateRowAction,
  isRenderDeleteRowAction,
  onUpdateRowClick,
  onDeleteRowClick,
  isHiddenRowActions,
  ...props
}: ManagedTableProps<T>) => {
  const { pagination, handleChangePagination } = useTablePagination();

  const { data, isFetching } = useTableQuery({ queryKey, queryFunction, pagination });

  const columns = useTableColumns({
    columns: initialColumns,
    isRenderUpdateRowAction,
    isRenderDeleteRowAction,
    onUpdateRowClick,
    onDeleteRowClick,
    isHiddenRowActions,
  });

  return (
    <Table
      dataSource={data?.items}
      columns={columns}
      loading={isFetching}
      pagination={{
        className: classes.pagination,
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
