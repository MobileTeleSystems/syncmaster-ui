import { MessageError } from '@shared/types';
import { AxiosError } from 'axios';

export const checkIsMessageError = (error: unknown): error is AxiosError<MessageError> => {
  return !!(error as AxiosError<MessageError>).response?.data.error.message;
};
