import { OptionItem } from '../../types';

import { PrepareOptionsForSelectProps } from './types';

/** Utility for creating options for select */
export const prepareOptionsForSelect = <T>({
  data = [],
  value,
  label,
}: PrepareOptionsForSelectProps<T>): OptionItem<T>[] => {
  return data.map((item) => ({
    data: item,
    value: String(item[value]),
    label: typeof label === 'function' ? label(item) : String(item[label]),
  }));
};
