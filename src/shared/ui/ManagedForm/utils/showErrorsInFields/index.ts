import { FormFieldError } from '@shared/config';
import { FormInstance } from 'antd';

/**
 * Util for processing and displaying form field errors from backend
 *
 * @param form - Form instance
 * @param errors - Array of objects with paths to fields contains an error from backend
 *
 */
export const showErrorsInFields = (form: FormInstance, errors: FormFieldError[]): void => {
  const fieldErrors = errors
    .map((field) => {
      // Keep only valid parts of the path
      const validPath = field.location.reduce<string[]>((acc, key) => {
        const currentPath = [...acc, key];
        // Check if the path to the current key exists
        if (typeof form.getFieldValue(currentPath) === 'object' || form.getFieldInstance(currentPath)) {
          acc.push(key);
        }
        return acc;
      }, []);

      return {
        name: validPath,
        errors: [field.message],
      };
    })
    // Remove errors without a valid path
    .filter(({ name }) => name.length > 0);

  form.setFields(fieldErrors);
};
