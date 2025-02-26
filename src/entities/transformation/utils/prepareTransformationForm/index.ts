import { parseFileSize } from '@entities/file/@x/transformation';

import { TransformationFilterFileType, Transformations, TransformationsForm, TransformationType } from '../../types';

/** Util for mapping of transformations data from backend to appropriate form value type  */
export const prepareTransformationForm = (data: Transformations): TransformationsForm => {
  return data.reduce((prev, curr) => {
    switch (curr.type) {
      case TransformationType.FILTER_ROWS:
      case TransformationType.FILTER_COLUMNS:
        return { ...prev, [curr.type]: curr.filters };
      case TransformationType.FILTER_FILE:
        return {
          ...prev,
          [curr.type]: curr.filters.map((item) => {
            switch (item.type) {
              case TransformationFilterFileType.NAME_GLOB:
              case TransformationFilterFileType.NAME_REGEXP:
                return item;
              case TransformationFilterFileType.FILE_SIZE_MIN:
              case TransformationFilterFileType.FILE_SIZE_MAX:
                const fileSize = parseFileSize(+item.value);
                return { type: item.type, unit: fileSize.unit, extra_value: fileSize.value };
            }
          }),
        };
    }
  }, {});
};
