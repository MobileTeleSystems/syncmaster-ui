import { PaginationResponse } from '@shared/types';
import { UseInfiniteQueryResult } from '@tanstack/react-query';

interface InfiniteRequestData<T> {
  data: PaginationResponse<T> | undefined;
}

/**
 * Interface that replaces the response type of infinite request
 */
export interface InfiniteRequestReturn<T, TData>
  extends Omit<UseInfiniteQueryResult<TData>, 'data'>,
    InfiniteRequestData<T> {}
