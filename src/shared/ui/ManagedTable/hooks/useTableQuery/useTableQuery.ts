import { PaginationResponse } from '@shared/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { UseTableQueryProps } from './types';

/** Hook for handling request data for table (using Tanstack Query) */
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
