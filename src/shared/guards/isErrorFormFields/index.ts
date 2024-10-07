import { ErrorFormFields } from '@shared/types';
import { AxiosError } from 'axios';

export const isErrorFormFields = (error: AxiosError): error is AxiosError<ErrorFormFields> => {
  const axiosError = error as AxiosError<ErrorFormFields>;
  const errorData = axiosError.response?.data?.error;
  return (
    errorData !== undefined &&
    Array.isArray(errorData.details) &&
    errorData.details.length > 0 &&
    errorData.details[0].location[0] === 'body'
  );
};
