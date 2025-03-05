import { TRANSFORMATIONS_FORM_DEFAULT_VALUE, TRANSFORMATIONS_REQUEST_DEFAULT_VALUE } from '../../constants';
import { TransformationFilterFileType, Transformations, TransformationsForm, TransformationType } from '../../types';

/** Util for mapping of transformations data from form value to appropriate type for backend  */
export const prepareTransformationRequest = (data?: TransformationsForm): Transformations => {
  if (!data) {
    return TRANSFORMATIONS_REQUEST_DEFAULT_VALUE;
  }

  return (Object.keys({ ...TRANSFORMATIONS_FORM_DEFAULT_VALUE, ...data }) as Array<keyof TransformationsForm>).map(
    (key) => {
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
            filters: (data[key] || []).map((filter) => {
              switch (filter.type) {
                case TransformationFilterFileType.NAME_GLOB:
                case TransformationFilterFileType.NAME_REGEXP:
                  return filter;
                case TransformationFilterFileType.FILE_SIZE_MIN:
                case TransformationFilterFileType.FILE_SIZE_MAX:
                  return { type: filter.type, value: `${filter.extra_value}${filter.unit}` };
              }
            }),
          };
      }
    },
  );
};
