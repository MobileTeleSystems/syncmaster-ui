import { TransformationFilterFileType } from '@entities/transformation';
import { isValidRegex } from '@shared/utils';

/** Regexp to search file with global magic characters (e.g. *.svg) */
export const NAME_GLOB_REGEXP = /([*?[])/;

export const CONTROL_RULES = {
  [TransformationFilterFileType.NAME_GLOB]: [{ required: true, pattern: NAME_GLOB_REGEXP }],
  [TransformationFilterFileType.NAME_REGEXP]: [{ required: true, validator: isValidRegex }],
};
