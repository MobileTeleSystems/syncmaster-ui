import { TransformationFilterFileType } from '@entities/transformation';

export interface FilterFileRegexpValueProps {
  type: Extract<
    TransformationFilterFileType,
    TransformationFilterFileType.NAME_GLOB | TransformationFilterFileType.NAME_REGEXP
  >;
  name: number;
}
