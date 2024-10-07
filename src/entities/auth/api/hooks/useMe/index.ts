import { useQuery } from '@tanstack/react-query';
import { Storage } from '@shared/constants';
import { AxiosError } from 'axios';

import { authApi } from '../../authApi';
import { GetMeResponse } from '../../types';
import { AuthQueryKey } from '../../keys';

export const useMe = () => {
  const accessToken = localStorage.getItem(Storage.ACCESS_TOKEN);

  return useQuery<GetMeResponse, AxiosError>({
    queryKey: [AuthQueryKey.GET_ME],
    queryFn: authApi.getMe,
    enabled: !!accessToken,
  });
};
