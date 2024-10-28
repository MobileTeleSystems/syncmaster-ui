import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { Error } from '../errors';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache duration - 5 minutes
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      throwOnError: true,
    },
    mutations: {
      throwOnError: (error) => axios.isAxiosError(error) && error.status === Error.AUTH,
    },
  },
});
