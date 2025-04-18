import { RuleObject } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';
import { TFunction } from 'i18next';

/**
 * Util for validating form field value by using pattern
 *
 * @param rule - RuleObject from antd (need use key "pattern" for validating)
 * @param value - StoreValue from antd (form field value)
 * @param t - TFunction from i18next
 */
export const validateFormFieldByPattern = (
  rule: RuleObject,
  value: StoreValue,
  t: TFunction<'error'>,
): Promise<void> => {
  const isEmptyField = value === '' || value === null || value === undefined;
  const isNotRequiredAndEmptyField = !rule.required && isEmptyField;

  if (isNotRequiredAndEmptyField || rule.pattern?.test(value)) {
    return Promise.resolve();
  }

  return Promise.reject(rule.message || t('invalidValue'));
};
