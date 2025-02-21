import { TransformationType } from '@entities/transformation';

import { TransformationFormItemProps } from './components';

export interface TransformationFormProps<T extends TransformationType>
  extends Pick<TransformationFormItemProps<T>, 'transformationType' | 'nestedTypeSelectLabel' | 'hasColumnField'> {}
