import { PageParams, PaginationResponse } from '@shared/types';
import { QueryKey } from '@tanstack/react-query';
import { SelectProps } from 'antd';

/**
 * Interface as Props for component "ManagedSelect"
 *
 * @template T - Data object type for select options.
 */
export interface ManagedSelectProps<T> extends Omit<SelectProps, 'options' | 'notFoundContent' | 'dropdownRender'> {
  /** Function for request data */
  queryFunction: (params: PageParams) => Promise<PaginationResponse<T>>;
  /** Query keys for requests cache */
  queryKey: QueryKey;
  /** Value for option from data object */
  optionValue: keyof T;
  /** Label for option from data object */
  optionLabel: keyof T | ((item: T) => string);
}
