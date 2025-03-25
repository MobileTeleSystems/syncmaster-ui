import { FormInstance } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

/**
 * Util for revalidating fields with errors when language change
 *
 * @param form - Form instance.
 * @param values - Form values that have changed.
 *
 */
export const revalidateErrorFields = (form: FormInstance): void => {
  const fieldsWithErrors: NamePath[] = [];
  const fields = form.getFieldsError();
  fields.forEach((field) => {
    if (field.errors.length) {
      fieldsWithErrors.push(field.name);
    }
  });
  form.validateFields(fieldsWithErrors);
};
