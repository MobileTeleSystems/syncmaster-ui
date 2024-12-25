import { DefaultOptionType } from 'antd/lib/select';
import { FocusEventHandler, UIEventHandler } from 'react';
import { flushSync } from 'react-dom';

import { OptionItem } from '../../types';
import { SEARCH_VALUE_DEFAULT } from '../../constants';

import { UseHandleSelectEventsProps } from './types';

/** Hook for handling Select's component events */
export const useHandleSelectEvents = <T, V extends DefaultOptionType['value']>({
  hasNextPage,
  fetchNextPage,
  setSearchValue,
  setTouched,
  onSelect = () => undefined,
  onBlur = () => undefined,
}: UseHandleSelectEventsProps<T, V>) => {
  const handleSelect = (newValue: V extends (infer A)[] ? A : V, option: OptionItem<T>) => {
    setSearchValue(SEARCH_VALUE_DEFAULT);
    onSelect(newValue, option);
  };

  const handleBlur: FocusEventHandler<HTMLElement> = (event) => {
    setSearchValue(SEARCH_VALUE_DEFAULT);
    onBlur(event);
  };

  const handlePopupScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    if (hasNextPage && target.scrollTop + target.offsetHeight === target.scrollHeight) {
      fetchNextPage();
    }
  };

  const handleOpenDropdown = (open: boolean) => {
    if (open) {
      // Immediate change touched state to avoid show initial option in dropdown while first page options is loading
      flushSync(() => {
        setTouched(true);
      });
    }
  };

  return { handleSelect, handleBlur, handlePopupScroll, handleOpenDropdown };
};
