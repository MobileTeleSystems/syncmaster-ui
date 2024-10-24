import { AxiosError } from 'axios';

import { MessageError } from '../../types';

export const checkIsMessageError = (error: unknown): error is AxiosError<MessageError> => {
  return !!(error as AxiosError<MessageError>).response?.data.error.message;
};
