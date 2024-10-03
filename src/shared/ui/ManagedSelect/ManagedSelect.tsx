import React, { memo, UIEventHandler, useMemo } from 'react';
import { Select, Spin } from 'antd';
import { useInfiniteRequest } from '@shared/config';

import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from './constants';
import { prepareOptionsForSelect } from './utils';
import { ManagedSelectProps } from './types';

/** Select component for infinite pagination of data in a dropdown */
function ManagedSelectDefault<T>({
  queryFunction,
  queryKey,
  optionValue,
  optionLabel,
  ...props
}: ManagedSelectProps<T>) {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteRequest<T>({
    queryKey,
    queryFn: ({ pageParam }) => queryFunction(pageParam),
    initialPageParam: { page: PAGE_DEFAULT, page_size: PAGE_SIZE_DEFAULT },
  });

  const options = useMemo(() => {
    return prepareOptionsForSelect({ data: data?.items, value: optionValue, label: optionLabel });
  }, [data, optionValue, optionLabel]);

  const handlePopupScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    if (hasNextPage && target.scrollTop + target.offsetHeight === target.scrollHeight) {
      fetchNextPage();
    }
  };

  return (
    <Select
      {...props}
      options={options}
      notFoundContent={isLoading ? <Spin size="small" /> : null}
      onPopupScroll={handlePopupScroll}
    />
  );
}

export const ManagedSelect = memo(ManagedSelectDefault) as typeof ManagedSelectDefault;
