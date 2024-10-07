import { axiosInstance } from '@shared/config';

import { GetMeResponse, LoginRequest, LoginResponse } from './types';

class AuthApi {
  login(data: LoginRequest): Promise<LoginResponse> {
    return axiosInstance.postForm('v1/auth/token', data);
  }

  getMe(): Promise<GetMeResponse> {
    return axiosInstance.get('v1/users/me');
  }
}

export const authApi = new AuthApi();
