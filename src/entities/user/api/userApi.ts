import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetUserRequest, User, GetUsersRequest } from './types';

export const USER_API = {
  getUsers: (params: GetUsersRequest): Promise<PaginationResponse<User>> => {
    return axiosInstance.get('users', { params });
  },

  getUser: ({ id }: GetUserRequest): Promise<User> => {
    return axiosInstance.get(`users/${id}`);
  },
};
