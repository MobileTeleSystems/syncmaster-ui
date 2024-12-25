import { DefaultOptionType } from 'antd/lib/select';
import { useMemo } from 'react';

import { prepareOptionsForSelect } from '../../utils';

import { UsePrepareOptionsProps } from './types';

/** Hook for handling Select's component events */
export const usePrepareOptions = <T, V extends DefaultOptionType['value']>({
  searchValue,
  selectedItem,
  renderOptionValue,
  renderOptionLabel,
  dataList,
}: UsePrepareOptionsProps<T, V>) => {
  return useMemo(() => {
    const loadedOptions = prepareOptionsForSelect({
      data: dataList?.items,
      renderValue: renderOptionValue,
      renderLabel: renderOptionLabel,
    });
    // Show selected element on first position in dropdown if search is empty
    if (selectedItem && !searchValue.length) {
      const selectedOption = {
        data: selectedItem,
        value: renderOptionValue(selectedItem),
        label: renderOptionLabel(selectedItem),
      };
      const selectedItemIndex = loadedOptions.findIndex((option) => option.value === selectedOption.value);
      if (selectedItemIndex > -1) {
        loadedOptions[selectedItemIndex] = loadedOptions[0];
        loadedOptions[0] = selectedOption;
      } else {
        loadedOptions.unshift(selectedOption);
      }
    }
    return loadedOptions;
  }, [dataList, selectedItem, searchValue, renderOptionValue, renderOptionLabel]);
};
