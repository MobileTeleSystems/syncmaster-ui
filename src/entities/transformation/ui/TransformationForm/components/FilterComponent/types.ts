import { TransformationsFormNestedType, TransformationType } from '@entities/transformation';

export interface FilterComponentProps<T extends TransformationType> {
  name: number;
  transformationType: T;
  nestedType?: TransformationsFormNestedType<T>;
}
