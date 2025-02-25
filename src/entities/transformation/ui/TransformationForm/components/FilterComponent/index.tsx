import React from 'react';
import { TransformationsFormNestedType, TransformationType } from '@entities/transformation';

import { FilterColumnsValue } from '../FilterColumnsValue';
import { FilterFileValue } from '../FilterFileValue';
import { FilterRowsValue } from '../FilterRowsValue';

import { FilterComponentProps } from './types';

export const FilterComponent = <T extends TransformationType>({
  transformationType,
  nestedType,
  name,
}: FilterComponentProps<T>) => {
  switch (transformationType) {
    case TransformationType.FILTER_ROWS:
      return (
        <FilterRowsValue
          name={name}
          // cast type because switch case doesn't resolve depends generic for multiple types
          type={nestedType as TransformationsFormNestedType<TransformationType.FILTER_ROWS>}
        />
      );
    case TransformationType.FILTER_COLUMNS:
      return (
        <FilterColumnsValue
          name={name}
          // cast type because switch case doesn't resolve depends generic for multiple types
          type={nestedType as TransformationsFormNestedType<TransformationType.FILTER_COLUMNS>}
        />
      );
    case TransformationType.FILTER_FILE:
      return (
        <FilterFileValue
          name={name}
          // cast type because switch case doesn't resolve depends generic for multiple types
          type={nestedType as TransformationsFormNestedType<TransformationType.FILTER_FILE>}
        />
      );
  }
};
