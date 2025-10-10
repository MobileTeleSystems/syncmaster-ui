import { AuthProviderType, AUTH_PROVIDER, Storage } from '@shared/constants';
import { InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (AUTH_PROVIDER === AuthProviderType.DUMMY) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(Storage.ACCESS_TOKEN)}`;
  }

  return config;
};
