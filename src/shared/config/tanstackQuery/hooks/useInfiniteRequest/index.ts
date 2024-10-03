import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { UseInfiniteRequestType } from './types';

/**
 * Hook for queries with infinite pagination.
 * It is a wrapper for a Tanstack useInfiniteQuery hook {@link https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries}
 * It collects response data from different pages {@link InfiniteData<TQueryFnData, PageParams>} into 1 array {@link PaginationResponse<T>}
 */
export const useInfiniteRequest: UseInfiniteRequestType = (options) => {
  const { data: infiniteData, ...rest } = useInfiniteQuery({
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
  });

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
};
