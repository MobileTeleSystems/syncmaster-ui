import { DefaultOptionType } from 'antd/lib/select';

import { SelectProps } from '../Select';

import { UseGetListProps, UseGetSelectedItemProps, UsePrepareOptionsProps } from './hooks';

/**
 * Interface as Props for component "ManagedSelect"
 *
 * @template T - Data object type for select options.
 * @template V - Value type for select options.
 */
export interface ManagedSelectProps<T, V extends DefaultOptionType['value']>
  extends Omit<
      SelectProps<V, OptionItem<T>>,
      'options' | 'notFoundContent' | 'dropdownRender' | 'onDropdownVisibleChange' | 'onPopupScroll' | 'filterOption'
    >,
    Pick<UseGetListProps<T>, 'queryKey' | 'queryFunction'>,
    Omit<UseGetSelectedItemProps<T, V>, 'value'>,
    Pick<UsePrepareOptionsProps<T, V>, 'renderOptionValue' | 'renderOptionLabel'> {}

/**
 * Interface that adding extra field with full data object from option
 *
 * @template T - Data object type for select options.
 */
export type OptionItem<T> = DefaultOptionType & { data: T };
