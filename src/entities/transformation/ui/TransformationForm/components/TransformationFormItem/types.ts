import { TransformationType, TransformationsFormNestedType } from '@entities/transformation';
import { FormListFieldData, FormListOperation } from 'antd';
import { ReactElement } from 'react';

/**
 * Interface as Props for component "TransformationFormItem"
 *
 * @template T - Transformation type of form.
 */
export interface TransformationFormItemProps<T extends TransformationType> extends FormListFieldData {
  /** Transformation type */
  transformationType: T;
  /** Label for select of nested types options */
  nestedTypeSelectLabel: string;
  /** Function for rendering component with extra form part depends on transformation type */
  renderValue: (params: {
    type: TransformationsFormNestedType<T> | undefined;
    name: FormListFieldData['name'];
  }) => ReactElement;
  /** Need to render Column field */
  hasColumnField?: boolean;
  /** Callback for deleting transformation form item */
  onRemove?: FormListOperation['remove'];
}
