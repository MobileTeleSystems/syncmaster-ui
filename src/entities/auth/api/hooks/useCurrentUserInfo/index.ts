import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import { authService } from '../../authService';
import { AuthUser } from '../../types';
import { AuthQueryKey } from '../../keys';

/** Hook for getting current user info from backend */
export const useCurrentUserInfo = (
  options?: Pick<UseQueryOptions<AuthUser>, 'enabled' | 'throwOnError'>,
): UseQueryResult<AuthUser> => {
  return useQuery({
    queryKey: [AuthQueryKey.GET_CURRENT_USER_INFO],
    queryFn: authService.getCurrentUserInfo,
    ...options,
  });
};
