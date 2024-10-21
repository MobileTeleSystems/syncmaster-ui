import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { GetUserRequest, User } from '../../types';
import { UserQueryKey } from '../../keys';
import { userService } from '../../userService';

/** Hook for getting user info from backend */
export const useGetUser = ({ id }: GetUserRequest): UseSuspenseQueryResult<User> => {
  return useSuspenseQuery({
    queryKey: [UserQueryKey.GET_USER, Number(id)],
    queryFn: () => userService.getUser({ id }),
  });
};
