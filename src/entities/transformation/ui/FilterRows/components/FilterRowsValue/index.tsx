import React from 'react';
import { Form, Input } from 'antd';

import { TransformationRowsFilterType } from '../../../../types';

import { FilterRowsValueProps } from './types';
import classes from './styles.module.less';

export const FilterRowsValue = ({ name, type }: FilterRowsValueProps) => {
  switch (type) {
    case TransformationRowsFilterType.IS_NULL:
    case TransformationRowsFilterType.IS_NOT_NULL:
    case undefined:
      return null;
    default:
      return (
        <Form.Item className={classes.root} label="Value" name={[name, 'value']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
  }
};
