import { PageParams, PaginationResponse } from '@shared/types';
import { InfiniteData, QueryKey, UseInfiniteQueryOptions, UseInfiniteQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface InfiniteRequestData<T> {
  data: PaginationResponse<T> | undefined;
}

/**
 * Interface that replaces the response type of infinite request
 */
export interface InfiniteRequestReturn<T, TData>
  extends Omit<UseInfiniteQueryResult<TData>, 'data'>,
    InfiniteRequestData<T> {}

/**
 * Function type of "useInfiniteRequest" hook.
 *
 * @template T - Response type of data object.
 * @template TError - Response type of Error.
 * @template TData - Response type of queryFunction, which is generated by the Tanstack useInfiniteQuery hook.
 * @template TQueryKey - Query key type for request. Is is for caching
 *
 * @param options - Request settings without "getNextPageParam" field
 */
export type UseInfiniteRequestType = <
  T,
  TError extends AxiosError = AxiosError,
  TQueryFnData extends PaginationResponse<T> = PaginationResponse<T>,
  TData extends InfiniteData<TQueryFnData, PageParams> = InfiniteData<TQueryFnData, PageParams>,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<
    UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey, PageParams>,
    'getNextPageParam'
  >,
) => InfiniteRequestReturn<T, TData>;