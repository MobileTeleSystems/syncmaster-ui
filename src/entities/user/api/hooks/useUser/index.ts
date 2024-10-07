import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetUserRequest, User } from '../../types';
import { UserQueryKey } from '../../keys';
import { userApi } from '../../userApi';

export const useUser = ({ id }: GetUserRequest): UseSuspenseQueryResult<User> => {
  return useSuspenseQuery({
    queryKey: [UserQueryKey.GET_USER, id],
    queryFn: () => userApi.getUser({ id }),
  });
};
