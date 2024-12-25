import { FormInstance } from 'antd';

/**
 * Util for cleaning field error text from backend while change its value
 *
 * @param form - Form instance.
 * @param values - Form values that have changed.
 *
 */
export const cleanErrors = (form: FormInstance, values: object, parentPath: string[] = []): void => {
  Object.entries(values).forEach(([key, value]) => {
    const currentPath = [...parentPath, key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      cleanErrors(form, value, currentPath);
      return;
    }
    const error = form.getFieldError(currentPath);
    if (error.length) {
      form.setFields([
        {
          name: currentPath,
          errors: [],
        },
      ]);
    }
  });
};
