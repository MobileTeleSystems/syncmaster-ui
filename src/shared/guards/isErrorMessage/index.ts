import { ErrorMessage } from '@shared/types';
import { AxiosError } from 'axios';

export const isErrorMessage = (error: AxiosError): error is AxiosError<ErrorMessage> => {
  return !!(error as AxiosError<ErrorMessage>).response?.data.error.message;
};
