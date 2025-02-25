import { Transformations, TransformationsForm, TransformationType } from '../../types';

/** Util for mapping of transformations data from form value to appropriate type for backend  */
export const prepareTransformationRequest = (data?: TransformationsForm): Transformations => {
  if (!data) {
    return [];
  }

  return (Object.keys(data) as Array<keyof TransformationsForm>).map((key) => {
    switch (key) {
      case TransformationType.FILTER_ROWS:
        return {
          type: TransformationType.FILTER_ROWS,
          filters: data[key] || [],
        };
      case TransformationType.FILTER_COLUMNS:
        return {
          type: TransformationType.FILTER_COLUMNS,
          filters: data[key] || [],
        };
      case TransformationType.FILTER_FILE:
        return {
          type: TransformationType.FILTER_FILE,
          filters: data[key] || [],
        };
    }
  });
};
