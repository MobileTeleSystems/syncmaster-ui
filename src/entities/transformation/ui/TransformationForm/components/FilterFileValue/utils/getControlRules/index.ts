import { TransformationFilterFileType } from '@entities/transformation';
import { isValidRegex } from '@shared/utils';
import { NUMBER_REGEXP } from '@shared/constants';

import { NAME_GLOB_REGEXP } from '../../constants';

/** Util for getting rules prop for control in FilterFileValue component form  */
export const getControlRules = (type?: TransformationFilterFileType) => {
  switch (type) {
    case TransformationFilterFileType.NAME_GLOB:
      return [{ required: true, pattern: NAME_GLOB_REGEXP }];
    case TransformationFilterFileType.NAME_REGEXP:
      return [{ required: true, validator: isValidRegex }];
    case TransformationFilterFileType.FILE_SIZE_MIN:
    case TransformationFilterFileType.FILE_SIZE_MAX:
      return [{ required: true, pattern: NUMBER_REGEXP }];
    default:
      return undefined;
  }
};
