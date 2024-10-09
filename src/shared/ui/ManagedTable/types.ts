import { PaginationResponse } from '@shared/types';
import { ColumnsType } from 'antd/lib/table';

export interface TablePagination {
  page: number;
  pageSize: number;
}

export type TableColumns<T extends PaginationResponse<object>> = ColumnsType<T['items'][number]>;
