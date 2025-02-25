import { RuleObject } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';

export const isValidRegex = (rule: RuleObject, value: StoreValue): Promise<void> => {
  try {
    new RegExp(value);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(new Error('Invalid regular expression'));
  }
};
