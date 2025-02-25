import { TransformationFilterFileType } from '@entities/transformation';
import { NUMBER_REGEXP } from '@shared/constants';
import { isValidRegex } from '@shared/utils';
import { RuleObject } from 'antd/lib/form';

/** Regexp to search file with global magic characters (e.g. *.svg) */
export const NAME_GLOB_REGEXP = /([*?[])/;

export const CONTROL_RULES: Record<TransformationFilterFileType, RuleObject[]> = {
  [TransformationFilterFileType.NAME_GLOB]: [{ required: true, pattern: NAME_GLOB_REGEXP }],
  [TransformationFilterFileType.NAME_REGEXP]: [{ required: true, validator: isValidRegex }],
  [TransformationFilterFileType.FILE_SIZE_MIN]: [{ required: true, pattern: NUMBER_REGEXP }],
  [TransformationFilterFileType.FILE_SIZE_MAX]: [{ required: true, pattern: NUMBER_REGEXP }],
};
