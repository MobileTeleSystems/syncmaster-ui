import { SelectProps as AntdSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';

export interface SelectProps<V, O extends BaseOptionType | DefaultOptionType>
  extends Omit<AntdSelectProps<V, O>, 'getPopupContainer'> {}
