import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { PageParams, PaginationResponse } from '@shared/types';
import { AxiosError } from 'axios';

interface IData<T> {
  data: PaginationResponse<T> | undefined;
}

export function useInfiniteRequest<
  T,
  TQueryFnData extends PaginationResponse<T> = PaginationResponse<T>,
  TError extends AxiosError = AxiosError,
  TData extends InfiniteData<TQueryFnData, PageParams> = InfiniteData<TQueryFnData, PageParams>,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<
    UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey, PageParams>,
    'getNextPageParam'
  >,
): Omit<UseInfiniteQueryResult<TData>, 'data'> & IData<T> {
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
