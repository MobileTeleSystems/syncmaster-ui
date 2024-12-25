import { useInfiniteRequest } from '@shared/config';

import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT, REQUEST_FIRST_PAGE_DELAY } from '../../constants';

import { UseGetListProps } from './types';

/** Hook for getting option list data for Select */
export const useGetList = <T>({ queryKey, queryFunction, searchValue, touched }: UseGetListProps<T>) => {
  return useInfiniteRequest<T>({
    queryKey: [...queryKey, searchValue],
    queryFn: async ({ pageParam }) => {
      const response = await queryFunction({ ...pageParam, search_query: searchValue });
      // Wait minimum delay to show loader when requesting 1st page
      if (pageParam.page === PAGE_DEFAULT) {
        await new Promise((resolve) => setTimeout(resolve, REQUEST_FIRST_PAGE_DELAY));
      }
      return response;
    },
    initialPageParam: { page: PAGE_DEFAULT, page_size: PAGE_SIZE_DEFAULT },
    // Show first page of options when user touches select
    enabled: touched,
  });
};
