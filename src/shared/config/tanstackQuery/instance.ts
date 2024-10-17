import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Error } from '@shared/constants';

import { normalizeQueryKey } from './utils';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache duration - 5 minutes
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      throwOnError: true,
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify(normalizeQueryKey(queryKey));
      },
    },
    mutations: {
      throwOnError: (error) => axios.isAxiosError(error) && error.status === Error.AUTH,
    },
  },
});
