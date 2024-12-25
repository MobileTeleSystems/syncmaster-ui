import { useQuery } from '@tanstack/react-query';
import { DefaultOptionType } from 'antd/lib/select';

import { UseGetSelectedItemProps } from './types';

/** Hook for getting selected option data for Select */
export const useGetSelectedItem = <T, V extends DefaultOptionType['value']>({
  detailQueryKey,
  detailQueryFunction,
  value,
}: UseGetSelectedItemProps<T, V>) => {
  return useQuery<T>({
    queryKey: [...detailQueryKey, value],
    queryFn: () => detailQueryFunction(value),
    enabled: !!value,
  });
};
