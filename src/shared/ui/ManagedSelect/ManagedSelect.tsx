import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { useDebouncedState } from '@shared/hooks';

import { ManagedSelectProps } from './types';
import { useGetList, useGetSelectedItem, useHandleSelectEvents, usePrepareOptions } from './hooks';
import { SEARCH_VALUE_CHANGE_DELAY, SEARCH_VALUE_DEFAULT } from './constants';

/** Select component for infinite pagination of data in a dropdown */
export const ManagedSelect = <T, V extends DefaultOptionType['value']>({
  queryFunction,
  queryKey,
  detailQueryFunction,
  detailQueryKey,
  renderOptionValue,
  renderOptionLabel,
  value,
  onBlur,
  onSelect,
  onSearch,
  ...props
}: ManagedSelectProps<T, V>) => {
  const [hasTouched, setTouched] = useState(false);

  const {
    value: searchValue,
    setValue: setSearchValue,
    setDebouncedValue: handleDebouncedSearchValue,
  } = useDebouncedState({ initialValue: SEARCH_VALUE_DEFAULT, delay: SEARCH_VALUE_CHANGE_DELAY, onDebounce: onSearch });

  const { data, hasNextPage, fetchNextPage, isLoading, isFetching } = useGetList({
    queryKey,
    queryFunction,
    hasTouched,
    searchValue,
  });

  const { data: selectedItem } = useGetSelectedItem({
    detailQueryKey,
    detailQueryFunction,
    // 'as' is needed to pass an existing initial value to the useGetSelectedItem.
    // It will always be of type V, since useGetSelectedItem checks for this
    value: value as V,
  });

  const { handleSelect, handleBlur, handleOpenDropdown, handlePopupScroll } = useHandleSelectEvents({
    onBlur,
    onSelect,
    setTouched,
    setSearchValue,
    hasNextPage,
    fetchNextPage,
  });

  const options = usePrepareOptions({
    dataList: data,
    searchValue,
    selectedItem,
    renderOptionValue,
    renderOptionLabel,
  });

  return (
    <Select
      // Do not transform value to option if there are not any options
      value={options.length ? value : undefined}
      showSearch
      onDropdownVisibleChange={handleOpenDropdown}
      onSelect={handleSelect}
      onSearch={handleDebouncedSearchValue}
      filterOption={false}
      // render notFoundContent when first request data is in progress
      options={isLoading ? [] : options}
      notFoundContent={isFetching ? <Spin size="small" /> : undefined}
      onPopupScroll={handlePopupScroll}
      onBlur={handleBlur}
      {...props}
    />
  );
};
