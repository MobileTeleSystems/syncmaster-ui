import React from 'react';
import { Form, Input } from 'antd';
import { TransformationFilterColumnsType } from '@entities/transformation';

import { FilterColumnsValueProps } from './types';

export const FilterColumnsValue = ({ name, type }: FilterColumnsValueProps) => {
  switch (type) {
    case TransformationFilterColumnsType.INCLUDE:
    case undefined:
      return null;
    case TransformationFilterColumnsType.RENAME:
      return (
        <Form.Item label="Value" name={[name, 'to']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
    case TransformationFilterColumnsType.CAST:
      return (
        <Form.Item label="Value" name={[name, 'as_type']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
  }
};
