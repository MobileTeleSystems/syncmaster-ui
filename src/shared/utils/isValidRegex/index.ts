import { RuleObject } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';
import { TFunction } from 'i18next';

export const isValidRegex = (rule: RuleObject, value: StoreValue, t: TFunction<'error'>): Promise<void> => {
  try {
    new RegExp(value);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(new Error(t('invalidRegularExpression'), { cause: e }));
  }
};
