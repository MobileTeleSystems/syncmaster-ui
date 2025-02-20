import { TransformationType } from '@entities/transformation';

import { TransformationFormItemProps } from './components';

export interface TransformationFormProps<T extends TransformationType>
  extends Pick<
    TransformationFormItemProps<T>,
    'transformationType' | 'renderValue' | 'nestedTypeSelectLabel' | 'hasColumnField'
  > {}

/** Type of renderValue function parameters for render prop */
export type RenderValueParams<T extends TransformationType> = Parameters<
  TransformationFormProps<T>['renderValue']
>[number];
