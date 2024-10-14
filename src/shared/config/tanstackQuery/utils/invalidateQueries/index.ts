import { QueryClient } from '@tanstack/react-query';

import { queryClient } from '../../instance';
import { normalizeQueryKey } from '../normalizeQueryKey';

// Util for overriding "invalidateQueries" function in Tanstack Query for avoiding separated cache, based on "normalizeQueryKey" util functionality
export const invalidateQueries: QueryClient['invalidateQueries'] = (filters, options) => {
  return queryClient.invalidateQueries(
    {
      ...filters,
      queryKey: normalizeQueryKey(filters?.queryKey),
    },
    options,
  );
};
