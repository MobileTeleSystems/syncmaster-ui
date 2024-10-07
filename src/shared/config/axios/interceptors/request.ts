import { Storage } from '@shared/constants';
import { InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem(Storage.ACCESS_TOKEN);

  if (!accessToken) {
    return config;
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};
