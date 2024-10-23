import { checkIsMessageError } from '@shared/guards';
import axios from 'axios';

/**
 * Util for handling error message from backend
 *
 * @param error - Error.
 *
 * @returns - Error message string
 */
export const getErrorMessage = (error: unknown): string => {
  let message = 'An unexpected error occurred';

  if (checkIsMessageError(error) && error.response) {
    message = error.response.data.error.message;
  } else if (axios.isAxiosError(error)) {
    message = error.message;
  }

  return message;
};
