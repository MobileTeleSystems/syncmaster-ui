import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionClickhouseProps } from './types';

export const TransferConnectionClickhouse = ({ name }: TransferConnectionClickhouseProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input size="large" />
    </Form.Item>
  );
};
