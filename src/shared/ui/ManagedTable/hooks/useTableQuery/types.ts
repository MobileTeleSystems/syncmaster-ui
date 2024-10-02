import { PageParams, PaginationResponse } from '@shared/types';
import { QueryKey } from '@tanstack/react-query';

import { TablePagination } from '../../types';

/**
 * Interface as Props for custom hook "useTableQueryProps"
 *
 * @template T - Data object type for table row.
 */
export interface UseTableQueryProps<T> {
  /** Function for request data for table */
  queryFunction: (params: PageParams) => Promise<PaginationResponse<T>>;
  /** Query keys for requests cache */
  queryKey: QueryKey;
  /** State of table data pagination */
  pagination: TablePagination;
}
