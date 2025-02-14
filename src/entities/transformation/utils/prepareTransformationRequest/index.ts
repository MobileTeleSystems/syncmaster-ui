import { Transformations, TransformationsForm } from '../../types';

/** Util for mapping of transformations data from form value to appropriate type for backend  */
export const prepareTransformationRequest = (data?: TransformationsForm): Transformations => {
  if (!data) {
    return [];
  }

  return (Object.keys(data) as Array<keyof TransformationsForm>).map((key) => ({
    type: key,
    filters: data[key] || [],
  }));
};
