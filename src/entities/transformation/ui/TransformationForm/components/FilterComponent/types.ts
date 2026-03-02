import { TransformationsFormNestedType, TransformationsFormWithNestedType } from '@entities/transformation';

export interface FilterComponentProps<T extends TransformationsFormWithNestedType> {
  name: number;
  transformationType: T;
  nestedType?: TransformationsFormNestedType<T>;
}
