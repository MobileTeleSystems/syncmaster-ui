import { FormFieldError } from '@shared/config';

import { TransformationType } from '../../types';

import { TRANSFORMATION_RESPONSE_LOCATION_POSITION } from './../../constants';

/** Util for preparing received errors for use on a form */
export const prepareTransformationFormError = (errors: FormFieldError[]): FormFieldError[] => {
  return errors.map((error) => {
    const { location } = error;
    if (location[TRANSFORMATION_RESPONSE_LOCATION_POSITION.CATEGORY] !== 'transformations') return error;

    switch (
      (location as string[])[TRANSFORMATION_RESPONSE_LOCATION_POSITION.TRANSFORMATION_TYPE] as TransformationType
    ) {
      case TransformationType.FILTER_SQL:
        //location : ['body', 'transformations', 3, 'sql', 'query']
        /* From the backend, the error record comes in a simple form in accordance with the api. 
        Return it to the state it was stored in the form */
        const insertPosition = TRANSFORMATION_RESPONSE_LOCATION_POSITION.TRANSFORMATION_TYPE + 1;
        const newLocation = location.slice(0, insertPosition).concat(0).concat(location.slice(insertPosition));
        return { ...error, location: newLocation } as FormFieldError;

      default:
        return error;
    }
  });
};
