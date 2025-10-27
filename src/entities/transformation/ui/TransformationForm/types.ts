import { TransformationType } from '@entities/transformation';

import { TransformationFormItemProps } from './components';

export interface TransformationFormProps<T extends TransformationType>
  extends Pick<TransformationFormItemProps<T>, 'transformationType' | 'nestedTypeSelectLabel' | 'hasColumnField'> {
  /** Can have empty records list */
  canHaveEmptyRecordsList?: boolean;
}

export interface FilterFormItemProps<T extends TransformationType>
  extends Pick<TransformationFormProps<T>, 'canHaveEmptyRecordsList'> {}
