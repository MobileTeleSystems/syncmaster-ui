import React, { UIEventHandler, useMemo } from 'react';
import { Select, Spin } from 'antd';
import { useInfiniteRequest } from '@shared/config';
import { DefaultOptionType } from 'antd/lib/select';

import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from './constants';
import { prepareOptionsForSelect } from './utils';
import { ManagedSelectProps } from './types';

/** Select component for infinite pagination of data in a dropdown */
export const ManagedSelect = <T, V extends DefaultOptionType['value']>({
  queryFunction,
  queryKey,
  renderOptionValue,
  renderOptionLabel,
  ...props
}: ManagedSelectProps<T, V>) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteRequest<T>({
    queryKey,
    queryFn: ({ pageParam }) => queryFunction(pageParam),
    initialPageParam: { page: PAGE_DEFAULT, page_size: PAGE_SIZE_DEFAULT },
  });

  const options = useMemo(() => {
    return prepareOptionsForSelect({
      data: data?.items,
      renderValue: renderOptionValue,
      renderLabel: renderOptionLabel,
    });
  }, [data, renderOptionValue, renderOptionLabel]);

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
};
