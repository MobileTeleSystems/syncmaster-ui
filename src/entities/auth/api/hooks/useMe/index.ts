import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Storage } from '@shared/constants';

import { authApi } from '../../authApi';
import { AuthUser } from '../../types';
import { AuthQueryKey } from '../../keys';

/** Hook for getting current user info from backend */
export const useCurrentUserInfo = (): UseQueryResult<AuthUser> => {
  const accessToken = localStorage.getItem(Storage.ACCESS_TOKEN);

  return useQuery({
    queryKey: [AuthQueryKey.GET_CURRENT_USER_INFO],
    queryFn: authApi.getCurrentUserInfo,
    enabled: !!accessToken,
  });
};
