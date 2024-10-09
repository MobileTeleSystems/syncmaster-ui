import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetUserRequest, User } from '../../types';
import { UserQueryKey } from '../../keys';
import { USER_API } from '../../userApi';

/** Hook for getting user info from backend */
export const useGetUser = ({ id }: GetUserRequest): UseSuspenseQueryResult<User> => {
  return useSuspenseQuery({
    queryKey: [UserQueryKey.GET_USER, id],
    queryFn: () => USER_API.getUser({ id }),
  });
};
