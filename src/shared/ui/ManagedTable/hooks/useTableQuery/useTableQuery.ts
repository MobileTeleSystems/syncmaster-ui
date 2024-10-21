import { PaginationResponse } from '@shared/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { TablePagination } from '../../types';

import { UseTableQueryProps } from './types';

/** Hook for handling request data for table (using Tanstack Query) */
export const useTableQuery = <T>({ queryKey, queryFunction, pagination }: UseTableQueryProps<T>) => {
  const queryClient = useQueryClient();
  const [placeholderData, setPlaceholderData] = useState<TablePagination>();

  const { data, isFetching } = useQuery<PaginationResponse<T>>({
    queryKey: [...queryKey, ...Object.values(pagination)],
    queryFn: () => queryFunction({ page: pagination.page, page_size: pagination.pageSize }),
    placeholderData: () => {
      return queryClient.getQueryData<PaginationResponse<T>>([
        ...queryKey,
        placeholderData?.page,
        placeholderData?.pageSize,
      ]);
    },
  });

  // Setting placeholder data for table to avoid showing empty component between page number/page size changing
  useEffect(() => {
    if (!isFetching) {
      setPlaceholderData(pagination);
    }
  }, [pagination, isFetching]);

  return { data, isFetching };
};
