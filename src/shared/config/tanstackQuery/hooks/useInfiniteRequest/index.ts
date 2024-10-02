import { InfiniteData, QueryKey, useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { useMemo } from 'react';
import { PageParams, PaginationResponse } from '@shared/types';
import { AxiosError } from 'axios';

import { InfiniteRequestReturn } from './types';

/**
 * Hook for queries with infinite pagination.
 * It is a wrapper for a Tanstack useInfiniteQuery hook {@link https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries}
 * It collects response data from different pages {@link InfiniteData<TQueryFnData, PageParams>} into 1 array {@link PaginationResponse<T>}
 *
 * @template T - Response type of data object.
 * @template TError - Response type of Error.
 * @template TData - Response type of queryFunction, which is generated by the Tanstack useInfiniteQuery hook.
 * @template TQueryKey - Query key type for request. Is is for caching
 *
 * @param options - Request settings
 *
 * @returns An object with the "data" property: data type - {@link PaginationResponse<T>} and other properties (isFetching, isError, ...) - {@link InfiniteRequestReturn<T, TData>}
 */
export function useInfiniteRequest<
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
): InfiniteRequestReturn<T, TData> {
  const fullOptions: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey, PageParams> = {
    ...options,
    getNextPageParam: (lastPage) => {
      const { page, pages } = lastPage.meta;

      if (page < pages) {
        return {
          page: page + 1,
          page_size: lastPage.meta.page_size,
        };
      }

      return undefined;
    },
  };

  const { data: infiniteData, ...rest } = useInfiniteQuery<TQueryFnData, TError, TData, TQueryKey, PageParams>(
    fullOptions,
  );

  const data = useMemo(() => {
    if (!infiniteData) {
      return undefined;
    }
    const onlyData = infiniteData.pages.map((page) => page.items);
    const cleanData = onlyData.flat();
    return {
      items: cleanData,
      meta: infiniteData.pages[infiniteData.pages.length - 1].meta,
    };
  }, [infiniteData]);

  return { data, ...rest };
}
