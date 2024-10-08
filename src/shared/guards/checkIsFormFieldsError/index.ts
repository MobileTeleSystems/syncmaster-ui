import { FormFieldsError } from '@shared/types';
import { AxiosError } from 'axios';

export const checkIsFormFieldsError = (error: unknown): error is AxiosError<FormFieldsError> => {
  return !!(error as AxiosError<FormFieldsError>).response?.data.error.details;
};
