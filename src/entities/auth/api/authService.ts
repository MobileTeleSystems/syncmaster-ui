import { axiosInstance } from '@shared/config';

import { AuthUser, KeycloakCallbackRequest, LoginRequest, LoginResponse } from './types';

export const authService = {
  login: (data: LoginRequest): Promise<LoginResponse> => {
    return axiosInstance.postForm('v1/auth/token', data);
  },
  getCurrentUserInfo: (): Promise<AuthUser> => {
    return axiosInstance.get('v1/users/me');
  },
  keycloakCallback: (params: KeycloakCallbackRequest): Promise<null> => {
    return axiosInstance.get('v1/auth/callback', { params });
  },
  keycloakLogout: (): Promise<null> => {
    return axiosInstance.get('v1/auth/logout');
  },
};
