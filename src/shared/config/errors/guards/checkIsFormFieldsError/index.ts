import { AxiosError } from 'axios';

import { FormFieldsError } from '../../types';

export const checkIsFormFieldsError = (error: unknown): error is AxiosError<FormFieldsError> => {
  return !!(error as AxiosError<FormFieldsError>).response?.data.error.details;
};
