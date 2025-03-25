import { TransformationFilterFileType } from '@entities/transformation';
import { isValidRegex } from '@shared/utils';
import { TFunction } from 'i18next';
import { RuleObject } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';

import { NAME_GLOB_REGEXP } from '../../constants';

export const getControlRules = (t: TFunction<'error'>) => {
  return {
    [TransformationFilterFileType.NAME_GLOB]: [{ required: true, pattern: NAME_GLOB_REGEXP }],
    [TransformationFilterFileType.NAME_REGEXP]: [
      { required: true, validator: (rule: RuleObject, value: StoreValue) => isValidRegex(rule, value, t) },
    ],
  };
};
