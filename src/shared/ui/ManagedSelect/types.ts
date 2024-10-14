import { PaginationRequest, PaginationResponse } from '@shared/types';
import { QueryKey } from '@tanstack/react-query';
import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';

/**
 * Interface as Props for component "ManagedSelect"
 *
 * @template T - Data object type for select options.
 * @template V - Value type for select options.
 */
export interface ManagedSelectProps<T, V extends DefaultOptionType['value']>
  extends Omit<SelectProps<V, OptionItem<T>>, 'options' | 'notFoundContent' | 'dropdownRender'> {
  /** Function for request data */
  queryFunction: (params: PaginationRequest) => Promise<PaginationResponse<T>>;
  /** Query keys for requests cache */
  queryKey: QueryKey;
  /** Function render value for option from data object */
  renderOptionValue: (item: T) => V;
  /** Function render label for option from data object */
  renderOptionLabel: (item: T) => DefaultOptionType['label'];
}

/**
 * Interface that adding extra field with full data object from option
 *
 * @template T - Data object type for select options.
 */
export type OptionItem<T> = DefaultOptionType & { data: T };
