import React from 'react';
import { Form, Input } from 'antd';
import { TransformationFilterRowsType } from '@entities/transformation';

import { FilterRowsValueProps } from './types';

export const FilterRowsValue = ({ name, type }: FilterRowsValueProps) => {
  switch (type) {
    case TransformationFilterRowsType.IS_NULL:
    case TransformationFilterRowsType.IS_NOT_NULL:
    case undefined:
      return null;
    default:
      return (
        <Form.Item label="Value" name={[name, 'value']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
  }
};
