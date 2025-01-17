import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';

import { OptionItem } from '../../types';

/** Interface as Props for hook "useHandleSelectEvents" */
export interface UseHandleSelectEventsProps<T, V extends DefaultOptionType['value']>
  extends Pick<SelectProps<V, OptionItem<T>>, 'onSelect' | 'onBlur'> {
  /** Flag that shows if there is next page in infinite request of options in Select */
  hasNextPage: boolean;
  /** Callback for changing requesting next page of options in Select */
  fetchNextPage: () => void;
  /** Callback for changing search input value in Select */
  setSearchValue: (value: string) => void;
  /** Callback for changing touched state for Select */
  setTouched: (value: boolean) => void;
}
