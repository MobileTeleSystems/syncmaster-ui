import { FormFieldError } from '@shared/config';

import { TransformationType } from '../../types';

/** Util for preparing received errors for use on a form */
export const prepareTransformationFormError = (errors: FormFieldError[]): FormFieldError[] => {
  return errors.map((error) => {
    const { location } = error;
    if (location[1] !== 'transformations') return error;

    switch ((location as string[])[3] as TransformationType) {
      case TransformationType.FILTER_SQL:
        //location : ['body', 'transformations', 3, 'sql', 'query']
        /* From the backend, the error record comes in a simple form in accordance with the api. 
        Return it to the state it was stored in the form */
        const newLocation = location.slice(0, 4).concat(0).concat(location.slice(4));
        return { ...error, location: newLocation } as FormFieldError;

      default:
        return error;
    }
  });
};
