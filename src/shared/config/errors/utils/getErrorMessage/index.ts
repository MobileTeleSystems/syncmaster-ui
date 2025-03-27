import { checkIsMessageError } from '@shared/config';
import axios from 'axios';
import { TFunction } from 'i18next';

/**
 * Util for handling error message from backend
 *
 * @param error - Error.
 * @param t - TFunction from i18next.
 *
 * @returns - Error message string
 */
export const getErrorMessage = (error: unknown, t: TFunction<'error'>): string => {
  let message = t('unexpectedErrorOccurred');

  if (checkIsMessageError(error) && error.response) {
    message = error.response.data.error.message;
  } else if (axios.isAxiosError(error)) {
    message = error.message;
  }

  return message;
};
