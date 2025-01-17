import { QueryKey } from '@tanstack/react-query';
import { DefaultOptionType } from 'antd/lib/select';

/**
 * Interface as Props for hook "useGetSelectedItem"
 *
 * @template T - Data object type for select options
 * @template V - Value type for select options
 */
export interface UseGetSelectedItemProps<T, V extends DefaultOptionType['value']> {
  /** Query keys for requests cache of entity's detail data */
  detailQueryKey: QueryKey;
  /** Function for request detail entity data */
  detailQueryFunction: (value: V) => Promise<T>;
  /** Value of Select */
  value: V;
}
