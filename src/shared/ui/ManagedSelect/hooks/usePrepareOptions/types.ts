import { PaginationResponse } from '@shared/types';
import { DefaultOptionType } from 'antd/lib/select';

/** Interface as Props for hook "usePrepareOptions" */
export interface UsePrepareOptionsProps<T, V extends DefaultOptionType['value']> {
  /** Search input value in Select */
  searchValue: string;
  /** Function render value for option from data object */
  renderOptionValue: (item: T) => V;
  /** Function render label for option from data object */
  renderOptionLabel: (item: T) => DefaultOptionType['label'];
  /** Response data from infinite request for options in Select */
  dataList?: PaginationResponse<T>;
  /** Selected option in Select */
  selectedItem?: T;
}
