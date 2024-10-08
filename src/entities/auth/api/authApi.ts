import { axiosInstance } from '@shared/config';

import { GetCurrentUserResponse, LoginRequest, LoginResponse } from './types';

class AuthApi {
  login(data: LoginRequest): Promise<LoginResponse> {
    return axiosInstance.postForm('v1/auth/token', data);
  }

  getCurrentUserInfo(): Promise<GetCurrentUserResponse> {
    return axiosInstance.get('v1/users/me');
  }
}

export const authApi = new AuthApi();
