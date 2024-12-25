import { PaginationRequest, PaginationResponse } from '@shared/types';
import { QueryKey } from '@tanstack/react-query';

/**
 * Interface as Props for hook "useGetList"
 *
 * @template T - Data object type for select options.
 */
export interface UseGetListProps<T> {
  /** Select was in focus one time at least */
  touched: boolean;
  /** Query keys for requests cache of entity list data */
  queryKey: QueryKey;
  /** Function for request entity list data */
  queryFunction: (params: PaginationRequest) => Promise<PaginationResponse<T>>;
  /** Search input value in select */
  searchValue: string;
}
