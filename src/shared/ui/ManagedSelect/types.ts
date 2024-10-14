import { PaginationRequest, PaginationResponse } from '@shared/types';
import { QueryKey } from '@tanstack/react-query';
import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';

/**
 * Interface as Props for component "ManagedSelect"
 *
 * @template T - Data object type for select options.
 */
export interface ManagedSelectProps<T>
  extends Omit<SelectProps<string, OptionItem<T>>, 'options' | 'notFoundContent' | 'dropdownRender'> {
  /** Function for request data */
  queryFunction: (params: PaginationRequest) => Promise<PaginationResponse<T>>;
  /** Query keys for requests cache */
  queryKey: QueryKey;
  /** Value for option from data object */
  optionValue: keyof T;
  /** Label for option from data object */
  optionLabel: keyof T | ((item: T) => string);
}

/**
 * Interface that adding extra field with full data object from option
 *
 * @template T - Data object type for select options.
 */
export type OptionItem<T> = DefaultOptionType & { data: T };
