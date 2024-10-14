import { PaginationResponse } from '@shared/types';
import { ColumnsType, TableProps } from 'antd/lib/table';

import { UseTableColumnsProps, UseTableQueryProps } from './hooks';

export interface TablePagination {
  page: number;
  pageSize: number;
}

export type TableColumns<T extends PaginationResponse<object>> = ColumnsType<T['items'][number]>;

export interface ManagedTableProps<T>
  extends TableProps<T>,
    Omit<UseTableQueryProps<T>, 'pagination'>,
    UseTableColumnsProps<T> {}
