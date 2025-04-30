import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetUserRequest, User, GetUsersRequest } from './types';

export const userService = {
  getUsers: (params: GetUsersRequest): Promise<PaginationResponse<User>> => {
    return axiosInstance.get('v1/users', { params });
  },

  getUser: ({ id }: GetUserRequest): Promise<User> => {
    return axiosInstance.get(`v1/users/${id}`);
  },
};
