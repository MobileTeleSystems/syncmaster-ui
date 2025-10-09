import { checkIsKeycloakUnauthorizedRedirectError } from '@shared/config';
import { AxiosError, AxiosResponse } from 'axios';

export const responseSuccessInterceptor = (response: AxiosResponse) => response.data;

export const responseErrorInterceptor = (error: AxiosError) => {
  if (checkIsKeycloakUnauthorizedRedirectError(error)) {
    localStorage.clear();
    window.location.href = error.response!.data.error.details;
    return Promise.resolve();
  }

  return Promise.reject(error);
};
