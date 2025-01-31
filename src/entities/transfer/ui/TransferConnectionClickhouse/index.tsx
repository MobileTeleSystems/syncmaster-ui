import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionClickhouseProps } from './types';

export const TransferConnectionClickhouse = ({ name }: TransferConnectionClickhouseProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
