import { axiosInstance } from '@shared/config';

import { AuthUser, LoginRequest, LoginResponse } from './types';

export const authService = {
  login: (data: LoginRequest): Promise<LoginResponse> => {
    return axiosInstance.postForm('auth/token', data);
  },
  getCurrentUserInfo: (): Promise<AuthUser> => {
    return axiosInstance.get('users/me');
  },
};
