import { TransformationType } from '@entities/transformation';
import { FormListFieldData, FormListOperation } from 'antd';

/**
 * Interface as Props for component "TransformationFormItem"
 *
 * @template T - Transformation type of form.
 */
export interface TransformationFormItemProps<T extends TransformationType> extends FormListFieldData {
  /** Transformation type */
  transformationType: T;
  /** Label for select of nested types options */
  nestedTypeSelectLabel?: string;
  /** Need to render Column field */
  hasColumnField?: boolean;
  /** Need to render NestedType field */
  hasNestedTypeSelectField?: boolean;
  /** Need to render Filter field */
  hasFilterComponent?: boolean;
  /** Need to render SQL field */
  hasSqlField?: boolean;
  /** Callback for deleting transformation form item */
  onRemove?: FormListOperation['remove'];
}
