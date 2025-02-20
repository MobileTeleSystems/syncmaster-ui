import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Form, Input } from 'antd';
import { TransformationFilterFileType, TransformationType } from '@entities/transformation';
import { isValidRegex } from '@shared/utils';
import { NUMBER_REGEXP } from '@shared/constants';

import { FilterFileValueProps } from './types';
import { NAME_GLOB_REGEXP } from './constants';
import classes from './styles.module.less';

export const FilterFileValue = ({ name, type }: FilterFileValueProps) => {
  const [hasFirstRender, setFirstRender] = useState(false);
  const formInstance = Form.useFormInstance();

  // Reset value and error of value field after change type
  useLayoutEffect(() => {
    // Do not reset when type is an initial
    if (hasFirstRender) {
      formInstance.setFields([
        {
          name: ['transformations', TransformationType.FILTER_FILE, name, 'value'],
          value: '',
          errors: [],
        },
      ]);
    }
    setFirstRender(true);
    // It doesn't need to check hasFirstRender
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInstance, name, type]);

  const rules = useMemo(() => {
    switch (type) {
      case TransformationFilterFileType.NAME_GLOB:
        return [{ required: true, pattern: NAME_GLOB_REGEXP }];
      case TransformationFilterFileType.NAME_REGEXP:
        return [{ required: true, validator: isValidRegex }];
      case TransformationFilterFileType.FILE_SIZE_MIN:
      case TransformationFilterFileType.FILE_SIZE_MAX:
        return [{ required: true, pattern: NUMBER_REGEXP }];
      default:
        return undefined;
    }
  }, [type]);

  return (
    <Form.Item className={classes.control} label="Value" name={[name, 'value']} rules={rules} hidden={!rules}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
