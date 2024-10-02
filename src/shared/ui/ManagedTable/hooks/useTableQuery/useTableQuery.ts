import { PaginationResponse } from '@shared/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { UseTableQueryProps } from './types';

/**
 * Hook for handling request data for table (using Tanstack Query)
 *
 * @template T - Data object type for table row.
 *
 * @param queryFunction - Function for request data for table
 * @param queryKey - Query keys for requests cache
 * @param pagination - State of table data pagination
 *
 * @returns - An object with the "data" property (data for table):
 * data type - {@link PaginationResponse<T>}
 * and boolean field "isFetching" (request status)
 */
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
