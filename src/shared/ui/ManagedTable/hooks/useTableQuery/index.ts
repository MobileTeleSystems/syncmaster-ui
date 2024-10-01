import { PageParams, PaginationResponse } from '@shared/types';
import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';

import { TablePagination } from '../../types';

export interface UseTableQueryProps<T> {
  queryFunction: (params: PageParams) => Promise<PaginationResponse<T>>;
  queryKey: QueryKey;
  pagination: TablePagination;
}

export const useTableQuery = <T>({ queryKey, queryFunction, pagination }: UseTableQueryProps<T>) => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery<PaginationResponse<T>>({
    queryKey: [...queryKey, ...Object.values(pagination)],
    queryFn: () => queryFunction({ page: pagination.page, page_size: pagination.pageSize }),
    placeholderData: () => {
      return queryClient.getQueryData<PaginationResponse<T>>([...queryKey, pagination.page - 1, pagination.pageSize]);
    },
  });

  return { data, isFetching };
};
