import { FormListFieldData, FormListOperation } from 'antd';

export interface FilterRowsItemProps extends FormListFieldData {
  onRemove?: FormListOperation['remove'];
}
