import { OptionItem } from '../../types';

import { PrepareOptionsForSelectProps } from './types';

/** Utility for creating options for select */
export const prepareOptionsForSelect = <T>({
  data = [],
  renderValue,
  renderLabel,
}: PrepareOptionsForSelectProps<T>): OptionItem<T>[] => {
  return data.map((item) => ({
    data: item,
    value: renderValue(item),
    label: renderLabel(item),
  }));
};
