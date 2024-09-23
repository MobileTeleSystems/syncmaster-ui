import Cookies from 'js-cookie';
import { Cookie } from '@shared/types';
import { InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get(Cookie.ACCESS_TOKEN);

  if (!accessToken) {
    return config;
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};
