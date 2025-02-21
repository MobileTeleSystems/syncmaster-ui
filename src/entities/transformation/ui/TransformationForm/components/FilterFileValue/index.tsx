import React, { useLayoutEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import { TransformationType } from '@entities/transformation';

import { FilterFileValueProps } from './types';
import classes from './styles.module.less';
import { getControlRules } from './utils';

export const FilterFileValue = ({ name, type }: FilterFileValueProps) => {
  const hasFirstRender = useRef(false);
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
    hasFirstRender.current = true;
  }, [formInstance, name, type]);

  const controlRules = getControlRules(type);

  return (
    <Form.Item
      className={classes.control}
      label="Value"
      name={[name, 'value']}
      rules={controlRules}
      hidden={!controlRules}
    >
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
