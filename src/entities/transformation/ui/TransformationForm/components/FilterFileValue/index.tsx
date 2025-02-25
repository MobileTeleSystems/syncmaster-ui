import React, { useLayoutEffect, useRef } from 'react';
import { Form } from 'antd';
import { TransformationFilterFileType, TransformationType } from '@entities/transformation';

import { FilterFileValueProps } from './types';
import { FilterFileRegexpValue, FilterFileSizeValue } from './components';

export const FilterFileValue = ({ name, type }: FilterFileValueProps) => {
  const hasFirstRender = useRef(false);
  const formInstance = Form.useFormInstance();

  // Reset value and error of value field after change type
  useLayoutEffect(() => {
    // Do not reset when type is an initial
    if (hasFirstRender.current) {
      formInstance.setFields([
        {
          name: ['transformations', TransformationType.FILTER_FILE, name, 'value'],
          value: '',
          errors: [],
        },
        {
          name: ['transformations', TransformationType.FILTER_FILE, name, 'extra_value'],
          value: '',
          errors: [],
        },
      ]);
    }
    hasFirstRender.current = true;
  }, [formInstance, name, type]);

  switch (type) {
    case TransformationFilterFileType.NAME_GLOB:
    case TransformationFilterFileType.NAME_REGEXP:
      return <FilterFileRegexpValue name={name} type={type} />;
    case TransformationFilterFileType.FILE_SIZE_MIN:
    case TransformationFilterFileType.FILE_SIZE_MAX:
      return <FilterFileSizeValue name={name} />;
  }
};
